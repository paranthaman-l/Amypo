package com.amypo.amypobackend.Models;

import org.springframework.beans.factory.annotation.Autowired;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

import com.amypo.amypobackend.services.LeaveService;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "leavedetails")
public class LeaveModel{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String lid;
    private Date date;
    private Date datefrom;
    private Date dateto;
    private int numberofdays;
    private String leavetype;
    private String leaveduration;
    private String description;
    private String username;
    private String email;
    private String userimage;
    private String status;

    // @Autowired
    // public LeaveService LeaveService;

//     @PrePersist
//     protected void onCreate() {
//         status = "yettoapprove";
//    if ("PAID".equalsIgnoreCase(leavetype)) {
//             if (LeaveService.isMoreThanOnePaidLeaveInMonth(datefrom,numberofdays)) {
//                 throw new IllegalStateException("Cannot apply for more than 1 paid leave in a month");
//             }
//         }
//     }

}
