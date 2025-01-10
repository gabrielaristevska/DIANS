package mk.tradesense.authservice.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String username;
    private String password;

    public LoginRequest() {}

    // LOMBOK PROBLEMS
    // MANUALLY WRITING GETTERS AS A RESULT
    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    // Override toString for better debugging
    @Override
    public String toString() {
        return "LoginRequest(" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ')';
    }
}
