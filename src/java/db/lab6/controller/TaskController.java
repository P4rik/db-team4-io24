package db.lab6.controller;

import db.lab6.dto.TaskDTO;
import db.lab6.entity.Task;
import db.lab6.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/task")
public class TaskController {
    private TaskService taskService;

    @PostMapping("/add")
    public Task addTask(@RequestBody TaskDTO taskDTO) {
        Task task = taskService.addTask(taskDTO);
        return task;
    }

    @GetMapping("/get/{id}")
    public Task getTaskById(@PathVariable Long id) {
        Task task = taskService.getTaskById(id);
        return task;
    }

    @GetMapping("/get/all")
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PutMapping("/update/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody TaskDTO taskDTO) {
        Task task = taskService.updateTask(id, taskDTO);
        return task;
    }

    @DeleteMapping("/delete/{id}")
    public String deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return "Task deleted";
    }
}
