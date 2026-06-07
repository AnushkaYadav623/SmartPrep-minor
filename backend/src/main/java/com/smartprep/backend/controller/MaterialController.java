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
        Map<String, String> response = new HashMap<>();
        response.put("message", "File uploaded successfully");
        response.put("fileId", String.valueOf(System.currentTimeMillis()));
        return ResponseEntity.ok(response);
    }
    
    @GetMapping
    public ResponseEntity<?> getMaterials() {
        // Mock returning clean JSON structure matching frontend expected mapping
        Map<String, Object> m1 = new HashMap<>();
        m1.put("id", "1");
        m1.put("filename", "Algorithms_MidSem.pdf");
        m1.put("fileType", "pdf");
        m1.put("uploadedAt", "2026-06-05T10:00:00Z");

        Map<String, Object> m2 = new HashMap<>();
        m2.put("id", "2");
        m2.put("filename", "Database_Systems_Notes.docx");
        m2.put("fileType", "docx");
        m2.put("uploadedAt", "2026-06-05T12:30:00Z");

        return ResponseEntity.ok(new Object[]{m1, m2});
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> renameMaterial(@PathVariable String id, @RequestBody Map<String, String> body) {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Material renamed successfully");
        response.put("newFilename", body.get("filename"));
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMaterial(@PathVariable String id) {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Material deleted successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}/download")
    public ResponseEntity<?> downloadMaterial(@PathVariable String id) {
        // Mock download returns simple textual stream
        return ResponseEntity.ok()
            .header("Content-Disposition", "attachment; filename=\"material-" + id + ".pdf\"")
            .body("Mock file content stream for material ID " + id);
    }
}
