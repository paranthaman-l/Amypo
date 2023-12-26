package com.amypo.amypobackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amypo.amypobackend.Models.Attendance;
import com.amypo.amypobackend.constant.Api;
import com.amypo.amypobackend.services.AttendanceService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin("*")
@RestController
@RequestMapping({Api.ADMIN,Api.TRAINER,Api.DEVELOPER,Api.CONTENTDEVELOPER,Api.BDM,Api.COMMON})
public class AttendanceController {
    @Autowired
    private AttendanceService attendanceService;

    @PostMapping("/checkIn")
    public Attendance posAttendance(@RequestParam String uid) {
        //TODO: process POST request
        
        return attendanceService.postAttendance(uid);
    }
    
}
