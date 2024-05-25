package db.lab6.dto;

import lombok.Data;

@Data
public class TaskDTO {
    private String name;
    private String description;
    private String isCompleted;
    private Long projectId;
}
