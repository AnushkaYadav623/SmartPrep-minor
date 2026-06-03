package com.smartprep.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.smartprep.backend.service.AiCommunicationService;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class GenerationController {

    @Autowired
    private AiCommunicationService aiService;

    @PostMapping("/notes/generate")
    public ResponseEntity<?> generateNotes(@RequestBody Map<String, String> payload) {
        // Fetch material content from DB using materialId, then call AI service
        String text = "Simulated extracted text from material " + payload.get("materialId");
        Map<String, Object> notes = aiService.generateNotes(text);
        return ResponseEntity.ok(notes);
    }

    @PostMapping("/quiz/generate")
    public ResponseEntity<?> generateQuiz(@RequestBody Map<String, String> payload) {
        String text = "Simulated extracted text from material " + payload.get("materialId");
        Map<String, Object> quiz = aiService.generateQuiz(text);
        return ResponseEntity.ok(quiz);
    }

    @PostMapping("/schedule/generate")
    public ResponseEntity<?> generateSchedule(@RequestBody Map<String, Object> scheduleReq) {
        Map<String, Object> plan = aiService.generateSchedule(scheduleReq);
        return ResponseEntity.ok(plan);
    }
}
