package com.amypo.amypobackend.services;

import java.util.List;
import java.util.Date;
import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amypo.amypobackend.Models.LeaveModel;
import com.amypo.amypobackend.Repository.LeaveRepository;

@Service
public class LeaveService {
    @Autowired
    private LeaveRepository leaveRepository;

    public LeaveModel postleave(LeaveModel lm) {

        return leaveRepository.save(lm);
    }

    public List<LeaveModel> getleave() {
        return leaveRepository.findAll();
    }

    public LeaveModel editleave(LeaveModel lm, String lid) {
        lm.setLid(lid);
        return leaveRepository.save(lm);
    }

    public String deleteleave(String lid) {
        leaveRepository.deleteById(lid);
        return "Leave deleted";
    }

    public String approveLeave(String id){
        LeaveModel leave = leaveRepository.findById(id).get();
        leave.setStatus("approved");
        leaveRepository.save(leave);
        return "leave approved";
    }

    public String declineLeave(String id){
        LeaveModel leave = leaveRepository.findById(id).get();
        leave.setStatus("declined");
        leaveRepository.save(leave);
        return "leave declined";
    }

    public List<LeaveModel> findAllMyStatus(String status){
        return leaveRepository.findAllByStatus(status);
    }

    public boolean isMoreThanOnePaidLeaveInMonth(Date startDate,int numberofdays) {
        // Calculate the start and end dates of the month for the given date
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(startDate);
        calendar.set(Calendar.DAY_OF_MONTH, 1); // Set to the first day of the month
        Date monthStartDate = calendar.getTime();
        calendar.add(Calendar.MONTH, 1); // Move to the next month
        calendar.add(Calendar.DAY_OF_MONTH, -1); // Set to the last day of the current month
        Date monthEndDate = calendar.getTime();

        // Fetch existing paid leave records for the given month
        List<LeaveModel> paidLeaveRecords = leaveRepository.findByLeaveTypeAndCreatedAtBetween("PAID", monthStartDate, monthEndDate);

        // Count the number of days in the fetched records
        int totalPaidLeaveDaysInMonth = paidLeaveRecords.stream()
                .mapToInt(LeaveModel::getNumberOfDays)
                .sum();

        // Check if the total exceeds 1 day
        return totalPaidLeaveDaysInMonth + numberofdays > 1;
    }
}