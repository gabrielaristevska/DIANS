package mk.tradesense.authservice.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String email;
    private String password;

    // LOMBOK PROBLEMS
    // MANUALLY WRITING GETTERS AS A RESULT

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
