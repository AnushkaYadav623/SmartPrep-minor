package com.smartprep.backend.service;

import com.smartprep.backend.model.Schedule;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ScheduleService {

    public List<Schedule> getSchedule(){

        List<Schedule> schedules =
                new ArrayList<>();

        schedules.add(
                new Schedule(
                        "Monday",
                        "Study Java",
                        2
                )
        );

        schedules.add(
                new Schedule(
                        "Tuesday",
                        "Study DSA",
                        3
                )
        );

        return schedules;
    }
}