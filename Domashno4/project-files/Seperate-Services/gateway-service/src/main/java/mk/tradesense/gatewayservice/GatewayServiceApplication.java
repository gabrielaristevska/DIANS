package mk.tradesense.gatewayservice;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class GatewayServiceApplication {

    @Autowired
    private ApplicationContext applicationContext;

    public static void main(String[] args) {
        SpringApplication.run(GatewayServiceApplication.class, args);
    }

    @PostConstruct
    public void checkFilter() {
        if (applicationContext.containsBean("jwtAuthenticationFilter")) {
            System.out.println("JwtAuthenticationFilter is registered in the context.");
        } else {
            System.err.println("JwtAuthenticationFilter is NOT registered in the context!");
        }
    }
}
