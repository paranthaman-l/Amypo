package com.amypo.amypobackend.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/getDataByDateAndPresent")
    public List<Attendance> getDataBYDateAndPresent(@RequestParam String date, @RequestParam String isPresent){
        return attendanceService.getDataByDateAndPresent(date,isPresent);
    }

    @GetMapping("/getReport")
    public ResponseEntity<Map<String, ArrayList<Attendance>>> getMonthlyAttendanceReport(
            @RequestParam String month,
            @RequestParam String year) {
        Map<String, ArrayList<Attendance>> report = attendanceService.getMonthlyAttendanceReport(month, year);
        return new ResponseEntity<>(report, HttpStatus.OK);
    }

    @GetMapping("/getReportByDate")
    public List<Map<String, Object>> getMethodName(@RequestParam LocalDate startDate, @RequestParam LocalDate endDate) {
        return attendanceService.getReportByDate(startDate, endDate);
    }
    

}
