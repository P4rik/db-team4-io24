package db.lab6.dto;

import lombok.Data;

@Data
public class UserDTO {
    private String email;
    private String nickname;
    private String password;
    private Long projectId;
}
