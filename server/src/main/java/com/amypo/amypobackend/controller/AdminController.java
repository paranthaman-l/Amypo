package com.amypo.amypobackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.amypo.amypobackend.constant.Api;
import com.amypo.amypobackend.services.LeaveService;
import com.amypo.amypobackend.services.UserService;
import com.amypo.amypobackend.services.AuthService;
import com.amypo.amypobackend.dtos.RegisterDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.amypo.amypobackend.Models.LeaveModel;
import com.amypo.amypobackend.Models.UserDetailsModel;

@RestController
@CrossOrigin(value = Api.FRONTEND)
@RequestMapping({ Api.ADMIN })
public class AdminController {

    @Autowired
    private LeaveService LeaveService;
    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDTO request) {
        boolean isRegistered = authService.EmployeeRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registered successfully")
                : ResponseEntity.badRequest().body("Already registered Email!");
    }

    @PutMapping("/approveLeave")
    public String approveLeave(@RequestParam String lid) {
        return LeaveService.approveLeave(lid);
    }

    @PutMapping("/declineLeave")
    public String declineLeave(@RequestParam String lid) {
        return LeaveService.declineLeave(lid);
    }

    @GetMapping("/getleavebystatus")
    public List<LeaveModel> getapprovedleavedata(@RequestParam String status) {
        return LeaveService.findAllMyStatus(status);
    }

    @GetMapping("/getallleave")
    public List<LeaveModel> getleaveinfo() {
        return LeaveService.getleave();
    }

    @GetMapping("/getEmployees")
    public List<UserDetailsModel> getEmployees(){
        return userService.getEmployees();
    }
 
}