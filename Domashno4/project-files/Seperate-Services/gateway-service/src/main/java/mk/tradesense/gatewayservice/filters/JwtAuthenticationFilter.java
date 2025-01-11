package mk.tradesense.gatewayservice.filters;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Map;

@Component
public class JwtAuthenticationFilter extends AbstractGatewayFilterFactory<JwtAuthenticationFilter.Config> {

    private final WebClient.Builder webClientBuilder;
    Logger logger = LoggerFactory.getLogger(JwtAuthenticationFilter.class);

    @Value("${auth-service.url}")
    private String authServiceUrl;

    public JwtAuthenticationFilter(WebClient.Builder webClientBuilder) {
        super(Config.class);
        this.webClientBuilder = webClientBuilder;
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            logger.info("JwtAuthenticationFilter triggered for request: {}", exchange.getRequest().getURI());

            String token = exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);
            if (token == null || !token.startsWith("Bearer ")) {
                exchange.getResponse().setStatusCode(config.unauthorizedStatus);
                return exchange.getResponse().setComplete();
            }

            logger.info("Token found, forwarding to auth-service for validation");

            return webClientBuilder.build()
                    .post() // Use POST for /validate
                    .uri(authServiceUrl)
                    .header(HttpHeaders.AUTHORIZATION, token)
                    .retrieve()
                    .onStatus(
                            httpStatus -> httpStatus.isError(),
                            clientResponse -> clientResponse.bodyToMono(String.class)
                                    .flatMap(body -> Mono.error(new RuntimeException("Invalid Token: " + body)))
                    )
                    .bodyToMono(Map.class) // Parse response to extract user details
                    .flatMap(userDetails -> {
                        logger.info("Token validated successfully, user: {}", userDetails.get("username"));
                        // Inject user details into headers
                        exchange.getRequest().mutate()
                                .header("X-Username", userDetails.get("username").toString());
                        return chain.filter(exchange);
                    })
                    .onErrorResume(e -> {
                        logger.error("Error validating token: {}", e.getMessage());
                        exchange.getResponse().setStatusCode(config.unauthorizedStatus);
                        return exchange.getResponse().setComplete();
                    });
        };
    }

    public static class Config {
        private HttpStatus unauthorizedStatus = HttpStatus.UNAUTHORIZED;

        public Config setUnauthorizedStatus(HttpStatus unauthorizedStatus) {
            this.unauthorizedStatus = unauthorizedStatus;
            return this;
        }
    }
}