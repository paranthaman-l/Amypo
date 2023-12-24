package com.amypo.amypobackend.Models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "_leaves")
public class LeaveModel {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String lid;
    private Date dateFrom;
    private Date dateTo;
    private int numberOfDays;
    private String leaveType;
    private String leaveDuration;
    private String reason;
    private String name;
    private String email;
    private String profile;
    private String status;

    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false, updatable = false)
    private Date createdAt;

    
    @PrePersist
    protected void onCreate() {
        createdAt = new Date();
    }

    // @Autowired
    // public LeaveService LeaveService;

    // @PrePersist
    // protected void onCreate() {
    // status = "yettoapprove";
    // if ("PAID".equalsIgnoreCase(leavetype)) {
    // if (LeaveService.isMoreThanOnePaidLeaveInMonth(datefrom,numberofdays)) {
    // throw new IllegalStateException("Cannot apply for more than 1 paid leave in a
    // month");
    // }
    // }
    // }

}
