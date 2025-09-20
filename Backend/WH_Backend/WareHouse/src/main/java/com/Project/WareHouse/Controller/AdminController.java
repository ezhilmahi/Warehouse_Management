package com.Project.WareHouse.Controller;

import com.Project.WareHouse.model.Admin;
import com.Project.WareHouse.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Admin loginRequest) {
        Optional<Admin> user = adminRepository.findByEmail(loginRequest.getEmail());
        Map<String, String> response = new HashMap<>();

        if (user.isPresent() && user.get().getPassword().equals(loginRequest.getPassword())) {

            String role = user.get().getRole();
            if (role == null || role.isEmpty()) {
                role = "user";
            }

            response.put("message", "Login successful");
            response.put("role", role);
            response.put("token", "your-jwt-token");
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Invalid credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Admin admin) {
        if (adminRepository.findByEmail(admin.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
        }


        if (admin.getRole() == null || admin.getRole().isEmpty()) {
            admin.setRole("user");
        }

        adminRepository.save(admin);
        return ResponseEntity.ok("Registered as " + admin.getRole());
    }
}