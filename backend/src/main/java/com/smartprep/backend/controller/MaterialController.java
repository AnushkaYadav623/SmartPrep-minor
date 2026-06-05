package com.smartprep.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/materials")
@CrossOrigin(origins = "*")
public class MaterialController {

    @PostMapping("/upload")
    public ResponseEntity<?> uploadMaterial() {
        // We can inject MaterialRepository and parse MultiPartFile here
        Map<String, String> response = new HashMap<>();
        response.put("message", "File uploaded successfully");
        response.put("fileId", "1");
        return ResponseEntity.ok(response);
    }
    
    @GetMapping
    public ResponseEntity<?> getMaterials() {
        return ResponseEntity.ok(new String[]{"Material 1", "Material 2"});
    }
}
