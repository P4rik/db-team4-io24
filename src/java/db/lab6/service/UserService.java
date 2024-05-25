package db.lab6.service;

import db.lab6.dto.UserDTO;
import db.lab6.entity.User;
import db.lab6.repository.ProjectRepository;
import db.lab6.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private UserRepository userRepository;
    private ProjectRepository projectRepository;

    public User addUser(UserDTO userDTO) {
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setNickname(userDTO.getNickname());
        user.setPassword(userDTO.getPassword());
        user.setProject(projectRepository.findById(userDTO.getProjectId()).orElseThrow(() -> new IllegalArgumentException("Project not found")));
        return userRepository.save(user);
    }
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User updateUser(Long id, UserDTO userDTO) {
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
        user.setEmail(userDTO.getEmail());
        user.setNickname(userDTO.getNickname());
        user.setPassword(userDTO.getPassword());
        user.setProject(projectRepository.findById(userDTO.getProjectId()).orElseThrow(() -> new IllegalArgumentException("Project not found")));
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("User not found");
        }
    }
}
