package com.amypo.amypobackend.controller;

import java.util.Date;
import java.util.List;

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
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin("*")
@RestController
@RequestMapping({ Api.ADMIN, Api.TRAINER, Api.DEVELOPER, Api.CONTENTDEVELOPER, Api.BDM, Api.COMMON })
public class AttendanceController {
    @Autowired
    private AttendanceService attendanceService;

    // @PostMapping("/checkIn")
    // public String checkIn(@RequestParam String uid) {
    // return attendanceService.postAttendance(uid);
    // }
    // @PostMapping("/checkOut")
    // public String checkOut(@RequestParam String uid) {
    // return attendanceService.checkOut(uid);
    // }

    @GetMapping("/getTodayAttendance")
    public List<Attendance> getTodayAttendance(){
        return attendanceService.getTodayAttendance();
    }


    @PostMapping("/makeTodayAttendance")
    public void postMethodName() {
        attendanceService.makeAttendance();
    }
    @PostMapping("/makeAttendance")
    public void postMethodName(@RequestParam String date) {
        attendanceService.makeAttendance(date);
    }

    @PostMapping("/markAttendance")
    public String markAttendance(@RequestBody List<Attendance> list) {
        return attendanceService.markAttendance(list);
    }

    @GetMapping("/getDayAttendance")
    public List<Attendance> getDayAttendances(@RequestParam String date) {
        return attendanceService.getDayAttendances(date);
    }

}
