package com.amypo.amypobackend.services;

import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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
            Boolean flag = false;
            for (Attendance attend : attendances) {
                if (attend.getDate().equals(date)) {
                    flag = true;
                    break;
                }
            }
            if(flag) {
                continue;
            }
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
            Boolean flag = false;
            for (Attendance attend : attendances) {
                if (attend.getDate().equals(date)) {
                    flag = true;
                    break;
                }
            }
            if(flag) {
                continue;
            }
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

    public List<Attendance> getDataByDateAndPresent(String date, String isPresent) {
        if (isPresent.equals("all"))
            return getDayAttendances(date);
        return attendanceRepository.findAllByDateAndIsPresent(date, isPresent);
    }

    public Map<String, Integer> getMonthlyAttendanceReport(String month, String year) {
        List<Attendance> allRecords = (List<Attendance>) attendanceRepository.findAll();

        Map<String, Integer> report = new HashMap<>();

        // Calculate start date and end date of the month
        LocalDate startDate = LocalDate.of(Integer.parseInt(year), Integer.parseInt(month), 1);
        LocalDate endDate = startDate.plusMonths(1).minusDays(1);

        // Loop through all records
        for (Attendance record : allRecords) {
            // Parse the date and check if it falls within the start and end dates
            LocalDate recordDate = LocalDate.parse(record.getDate(), DateTimeFormatter.ISO_DATE);
            if (!recordDate.isBefore(startDate) && !recordDate.isAfter(endDate)) {
                // Update the report accordingly
                String employeeName = record.getName(); // Adjust this based on your actual field
                report.put(employeeName, report.getOrDefault(employeeName, 0) + 1);
            }
        }

        return report;
    }

    public List<Map<String, Object>> getReportByDate(LocalDate startDate, LocalDate endDate) {
        List<UserDetailsModel> users = userRepository.findAll();
        return users.stream()
                .map(employee -> {
                    Map<String, Object> attendanceCount = new HashMap<>();
                    attendanceCount.put("name", employee.getName());
                    attendanceCount.put("email", employee.getEmail());
                    attendanceCount.put("profile", employee.getProfile());
                    attendanceCount.put("countOfAbsent", 0);
                    attendanceCount.put("countOfPresent", 0);
                    attendanceCount.put("countOfLeave", 0);
                    attendanceCount.put("countOfHalfDay", 0);

                    employee.getAttendances().forEach(attendance -> {
                        LocalDate attendanceDate = LocalDate.parse(attendance.getDate());

                        if ((attendanceDate.isEqual(startDate) || attendanceDate.isAfter(startDate))
                                && attendanceDate.isBefore(endDate.plusDays(1))) {

                            String isPresent = attendance.getIsPresent();

                            switch (isPresent) {
                                case "Present":
                                    attendanceCount.put("countOfPresent", (int) attendanceCount.get("countOfPresent") + 1);
                                    break;
                                case "Absent":
                                    attendanceCount.put("countOfAbsent", (int) attendanceCount.get("countOfAbsent") + 1);
                                    break;
                                case "Leave":
                                    attendanceCount.put("countOfLeave", (int) attendanceCount.get("countOfLeave") + 1);
                                    break;
                                case "Half Day":
                                    attendanceCount.put("countOfHalfDay", (int) attendanceCount.get("countOfHalfDay") + 1);
                                    break;
                            }
                        }
                    });

                    return attendanceCount;
                })
                .collect(Collectors.toList());
    }
}