package mk.tradesense.tradesense.dto;

import lombok.Data;
import mk.tradesense.tradesense.model.enumerations.Role;

@Data
public class LoginResponse {
    private String jwtToken;

    private String username;
    private Role role;

    public LoginResponse(String jwtToken, String username, Role role) {
        this.jwtToken = jwtToken;
        this.username = username;
        this.role = role;
    }
}
