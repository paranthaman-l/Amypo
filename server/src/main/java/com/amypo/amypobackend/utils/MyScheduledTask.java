package com.amypo.amypobackend.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.amypo.amypobackend.services.AttendanceService;

@Component
public class MyScheduledTask {

    @Autowired
    private AttendanceService attendanceService;
    @Scheduled(cron = "0 9 16 * * ?") // Runs every day at 12:00 PM
    public void makeApiRequest() {
        attendanceService.makeAttendance();
    }
}
