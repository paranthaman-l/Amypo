package com.amypo.amypobackend.services;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amypo.amypobackend.Models.Attendance;
import com.amypo.amypobackend.Repository.AttendanceRepository;

@Service
public class AttendanceService {
    @Autowired
    private AttendanceRepository attendanceRepository;

    public Attendance postAttendance(String uid) {
        Attendance attend = new Attendance();
        attend.setCheckInDateTime(LocalDateTime.now());
        LocalDate currentDate = LocalDate.now();
        Date date = Date.valueOf(currentDate);
        attend.setDate(date);
        return attendanceRepository.save(attend);
    }

    
}