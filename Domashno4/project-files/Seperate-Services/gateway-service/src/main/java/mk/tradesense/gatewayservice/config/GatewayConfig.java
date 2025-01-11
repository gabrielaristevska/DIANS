package mk.tradesense.gatewayservice.config;

import mk.tradesense.gatewayservice.filters.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.jwt.NimbusReactiveJwtDecoder;
import org.springframework.security.oauth2.jwt.ReactiveJwtDecoder;
import org.springframework.web.reactive.function.client.WebClient;

import javax.crypto.spec.SecretKeySpec;

@Configuration
public class GatewayConfig {

    private final WebClient.Builder webClientBuilder;

    @Value("${spring.security.oauth2.resourceserver.jwt.secret-key}")
    private String secretKey;

    public GatewayConfig(WebClient.Builder webClientBuilder) {
        this.webClientBuilder = webClientBuilder;
    }

//    @Bean
//    public JwtAuthenticationFilter jwtAuthenticationFilter() {
//        return new JwtAuthenticationFilter(webClientBuilder);
//    }

    @Bean
    public ReactiveJwtDecoder reactiveJwtDecoder() {
        return NimbusReactiveJwtDecoder.withSecretKey(new SecretKeySpec(secretKey.getBytes(), "HmacSHA256")).build();
    }
}