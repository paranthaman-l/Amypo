package com.amypo.amypobackend.services;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amypo.amypobackend.Models.Attendance;
import com.amypo.amypobackend.Models.UserDetailsModel;
import com.amypo.amypobackend.Repository.AttendanceRepository;
import com.amypo.amypobackend.Repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class AttendanceService {
    @Autowired
    private AttendanceRepository attendanceRepository;
    @Autowired
    private UserRepository userRepository;

    public String markAttendance(List<Attendance> list) {
        attendanceRepository.saveAll(list);
        return "Attendance Updated !";
    }

    @Transactional
    public void makeAttendance() {
        String date = Date.valueOf(LocalDate.now()).toString();
        List<UserDetailsModel> users = userRepository.findAll();

        for (UserDetailsModel user : users) {
            // Create a new Attendance object for each user
            Attendance attendance = Attendance.builder()
                    .date(date)
                    .isPresent("")
                    .email(user.getEmail())
                    .name(user.getName())
                    .empId(user.getEmpId())
                    .profile(user.getProfile())
                    .uid(user.getEid())
                    .build();

            List<Attendance> attendances = user.getAttendances();

            if (attendances.isEmpty()) {
                attendances = new ArrayList<>();
            }

            attendances.add(attendance);

            // Save the new Attendance object for the current user
            attendanceRepository.save(attendance);

            // Update the user's attendances
            user.setAttendances(attendances);
            userRepository.save(user);
        }
    }

    public List<Attendance> getDayAttendances(String date) {
        return attendanceRepository.findByDate(date);
    }

    public List<Attendance> getTodayAttendance() {
        String date = Date.valueOf(LocalDate.now()).toString();
        return attendanceRepository.findByDate(date);
    }

    public void makeAttendance(String date) {
        List<UserDetailsModel> users = userRepository.findAll();

        for (UserDetailsModel user : users) {
            // Create a new Attendance object for each user
            Attendance attendance = Attendance.builder()
                    .date(date)
                    .isPresent("")
                    .email(user.getEmail())
                    .name(user.getName())
                    .empId(user.getEmpId())
                    .profile(user.getProfile())
                    .uid(user.getEid())
                    .build();

            List<Attendance> attendances = user.getAttendances();

            if (attendances.isEmpty()) {
                attendances = new ArrayList<>();
            }

            attendances.add(attendance);

            // Save the new Attendance object for the current user
            attendanceRepository.save(attendance);

            // Update the user's attendances
            user.setAttendances(attendances);
            userRepository.save(user);
        }
    }

    // public String postAttendance(String uid) {
    // LocalTime allowedCheckInTime = LocalTime.of(8, 30);

    // // Check if the current time is greater than 8:30 AM
    // LocalTime currentTime = LocalTime.now();
    // String date = Date.valueOf(LocalDate.now()).toString();
    // if (currentTime.isBefore(allowedCheckInTime)) {
    // return "Check-in available only after 8:30 AM";
    // }
    // UserDetailsModel user = userRepository.findById(uid).orElse(null);
    // if (user == null) {
    // return "User not found";
    // }

    // List<Attendance> attendances = user.getAttendances();
    // for (Attendance attendance : attendances) {
    // if (attendance.getDate().equals(date)) {
    // return "Already Checked In";
    // }
    // }

    // Attendance attend = new Attendance();
    // attend.setDate(date);
    // attend.setCheckInDateTime(LocalDateTime.now());

    // attendances.add(attend);
    // user.setAttendances(attendances);
    // userRepository.save(user);
    // attendanceRepository.save(attend);
    // return "Check-in Successful";
    // }

    // public String checkOut(String uid) {
    // LocalTime allowedCheckOutTime = LocalTime.of(11, 30);
    // LocalTime currentTime = LocalTime.now();
    // if (currentTime.isBefore(allowedCheckOutTime)) {
    // return "Check-Out available only after 5:30 PM";
    // }
    // UserDetailsModel user = userRepository.findById(uid).orElse(null);
    // if (user == null) {
    // return "User not found";
    // }
    // List<Attendance> attendances = user.getAttendances();

    // Attendance attend = null;
    // String date = Date.valueOf(LocalDate.now()).toString();
    // for (Attendance attendance : attendances) {
    // if (attendance.getDate().equals(date)) {
    // attend = attendance;
    // break;
    // }
    // }
    // if (attend == null)
    // return "You must have check In First";

    // attend.setCheckOutDateTime(LocalDateTime.now());
    // LocalDateTime checkInDateTime = attend.getCheckInDateTime();
    // LocalDateTime checkOutDateTime = attend.getCheckOutDateTime();

    // if (checkInDateTime != null) {
    // Duration duration = Duration.between(checkInDateTime, checkOutDateTime);
    // long hours = duration.toHours();
    // long minutes = duration.minusHours(hours).toMinutes();
    // attend.setWorkingHours(String.valueOf(hours)+":"+minutes);
    // attendanceRepository.save(attend);
    // return "Check-Out Successful!\nToday Working Hours is "+hours+":"+minutes;
    // } else {
    // return "Check-in information missing";
    // }
    // }

}