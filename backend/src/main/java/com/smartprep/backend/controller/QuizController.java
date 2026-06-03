package com.smartprep.backend.controller;

import com.smartprep.backend.model.Quiz;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {

    @GetMapping
    public Quiz getQuiz(){

        Quiz q = new Quiz();

        q.setQuestion(
                "What is Java?"
        );

        q.setOptionA("Programming Language");
        q.setOptionB("Database");
        q.setOptionC("Browser");
        q.setOptionD("Operating System");

        q.setAnswer(
                "Programming Language"
        );

        return q;
    }
}