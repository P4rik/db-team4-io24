package db.lab6.service;

import db.lab6.dto.TaskDTO;
import db.lab6.entity.Task;
import db.lab6.repository.ProjectRepository;
import db.lab6.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TaskService {
    private TaskRepository taskRepository;
    private ProjectRepository projectRepository;

    public Task addTask(TaskDTO taskDTO) {
        Task task = new Task();
        task.setName(taskDTO.getName());
        task.setDescription(taskDTO.getDescription());
        task.setIsCompleted(taskDTO.getIsCompleted());
        task.setProject(projectRepository.findById(taskDTO.getProjectId()).orElseThrow(() -> new IllegalArgumentException("Project not found")));
        return taskRepository.save(task);
    }
    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Task not found"));
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task updateTask(Long id, TaskDTO taskDTO) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Task not found"));
        task.setName(taskDTO.getName());
        task.setDescription(taskDTO.getDescription());
        task.setIsCompleted(taskDTO.getIsCompleted());
        task.setProject(projectRepository.findById(taskDTO.getProjectId()).orElseThrow(() -> new IllegalArgumentException("Project not found")));
        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        if (taskRepository.existsById(id)){
            taskRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Task not found");
        }
    }
}
