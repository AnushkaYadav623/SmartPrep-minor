package com.smartprep.backend.model;

public class Schedule {

    private String day;

    private String task;

    private int hours;

    public Schedule(){}

    public Schedule(
            String day,
            String task,
            int hours
    ){
        this.day=day;
        this.task=task;
        this.hours=hours;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public int getHours() {
        return hours;
    }

    public void setHours(int hours) {
        this.hours = hours;
    }
}