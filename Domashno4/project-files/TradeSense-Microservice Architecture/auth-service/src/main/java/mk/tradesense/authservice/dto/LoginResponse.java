package mk.tradesense.authservice.dto;

import lombok.Data;
import mk.tradesense.authservice.model.enumerations.Role;


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

    // LOMBOK PROBLEMS
    // MANUALLY WRITING GETTERS AS A RESULT
    public String getJwtToken() {
        return jwtToken;
    }

    public String getUsername() {
        return username;
    }

    public Role getRole() {
        return role;
    }
}
