package com.amypo.amypobackend.controller;

import java.util.List;
import java.time.LocalDate;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.amypo.amypobackend.Models.LeaveModel;
import com.amypo.amypobackend.Models.UserDetailsModel;
import com.amypo.amypobackend.services.LeaveService;
import com.amypo.amypobackend.services.UserService;
import com.amypo.amypobackend.constant.Api;

@CrossOrigin("*")
@RestController
@RequestMapping({ Api.ADMIN, Api.TRAINER, Api.DEVELOPER, Api.CONTENTDEVELOPER, Api.BDM, Api.COMMON })
public class LeaveController {

    @Autowired
    public LeaveService ls;

    @Autowired
    private UserService us;

    @PostMapping("/postleave")
    public String postleave(@RequestBody LeaveModel lm, @RequestParam String eid) {
        UserDetailsModel user = us.getUserById(eid);
        List<LeaveModel> leaves = user.getLeaveData();
        Date startdate = lm.getDateFrom();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        LocalDate sdate = startdate.toInstant().atZone(sdf.getTimeZone().toZoneId()).toLocalDate();
        System.out.println(sdate);
        for (LeaveModel l : leaves) {
            if (l.getEmail().equals(user.getEmail()) && l.getStatus().equals("approved")) {
                Date enddate = l.getDateTo();
                LocalDate edate = enddate.toInstant().atZone(sdf.getTimeZone().toZoneId()).toLocalDate();
                int comparisonResult = sdate.compareTo(edate);
                System.out.println(comparisonResult);
                if (comparisonResult < 0) {
                    return "You are on leave already on this period";
                }
            }
        }
        if(lm.getLeaveType().equalsIgnoreCase("Paid")){
            for(LeaveModel l : leaves){
                if(l.getDateFrom().toString().substring(0,8).equalsIgnoreCase(sdate.toString().substring(0, 8)) && "Paid".equals(l.getLeaveType())){
                    return "Monthly Once Only take Paid Leave";
                }
            }
        }
        ls.postleave(lm, user);
        return "Leave applied successfully";
    }

    @DeleteMapping("/deleteleave")
    public String delleave(@RequestParam String lid) {
        return ls.deleteleave(lid);
    }

    @PutMapping("/editleave")
    public LeaveModel updateleave(@RequestBody LeaveModel lm, @RequestParam String lid) {
        return ls.editleave(lm, lid);
    }

    @GetMapping("/getDataByStatusInUser")
    public List<LeaveModel> getDataByStatusInUser(@RequestParam String eid, @RequestParam String status) {
        return ls.findAllByStatusAndId(eid, status);
    }
}