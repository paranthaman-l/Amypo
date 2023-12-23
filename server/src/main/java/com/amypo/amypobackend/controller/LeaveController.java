package com.amypo.amypobackend.controller;

import java.util.List;
import java.time.LocalDate;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
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
@RequestMapping({Api.ADMIN,Api.TRAINER,Api.DEVELOPER,Api.CONTENTDEVELOPER,Api.BDM})
public class LeaveController{

    @Autowired
    public LeaveService ls;

    @Autowired
    private UserService us;

    @PostMapping("/postleave")
    public String postleave(@RequestBody LeaveModel lm){

        String email =lm.getEmail();
        UserDetailsModel user = us.getuserbyemail(email);
        List<LeaveModel> leaves = user.getLeavedata();

        for(LeaveModel l : leaves){

        }

        Date startdate = lm.getDatefrom();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        LocalDate sdate = startdate.toInstant().atZone(sdf.getTimeZone().toZoneId()).toLocalDate();
        for(LeaveModel l : leaves){
                if(l.getEmail() == email && l.getStatus() == "approved"){
                    Date enddate = l.getDateto();
                    LocalDate edate = enddate.toInstant().atZone(sdf.getTimeZone().toZoneId()).toLocalDate();
                    int comparisonResult = sdate.compareTo(edate);
                    if (comparisonResult < 0) {
                        return "You are on leave already on this period";
                    }
                }
            }

        ls.postleave(lm);
        return "Leave applied successfully";
    }

    @DeleteMapping("/deleteleave")
    public String delleave(@RequestParam String lid){
    return ls.deleteleave(lid);
    }

    @PutMapping("/editleave")
    public LeaveModel updateleave(@RequestBody LeaveModel lm,@RequestParam String lid){
    return ls.editleave(lm,lid);
    }

}