package db.lab6.controller;

import db.lab6.dto.ProjectDTO;
import db.lab6.entity.Project;
import db.lab6.service.ProjectService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/project")
public class ProjectController {
    private ProjectService projectService;

    @PostMapping("/add")
    public Project addProject(@RequestBody ProjectDTO projectDTO){
        Project project = projectService.addProject(projectDTO);
        return project;
    }
    @GetMapping("/get/{id}")
    public Project getProjectById(@PathVariable Long id){
        Project project = projectService.getProjectById(id);
        return project;
    }
    @GetMapping("/get/all")
    public List<Project> getAllProjects(){
        return projectService.getAllProjects();
    }
    @PutMapping("/update/{id}")
    public Project updateProject(@PathVariable Long id, @RequestBody ProjectDTO projectDTO){
        Project project = projectService.updateProject(id, projectDTO);
        return project;
    }
    @DeleteMapping("/delete/{id}")
    public String deleteProject(@PathVariable Long id){
        projectService.deleteProject(id);
        return "Project deleted";
    }
}
