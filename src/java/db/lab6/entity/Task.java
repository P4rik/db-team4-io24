package db.lab6.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "task")
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = true)
    private String isCompleted;

    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;
}
