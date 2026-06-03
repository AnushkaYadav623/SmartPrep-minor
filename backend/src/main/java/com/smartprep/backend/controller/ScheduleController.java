package com.smartprep.backend.controller;

import com.smartprep.backend.model.Schedule;
import com.smartprep.backend.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/schedule")
@CrossOrigin("*")
public class ScheduleController {

    @Autowired
    private ScheduleService scheduleService;

    @GetMapping
    public List<Schedule> getSchedule(){

        return scheduleService.getSchedule();
    }
}