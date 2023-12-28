package com.amypo.amypobackend.Models;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "_attendance")
@Builder
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String aid;
    private String uid;
    private String empId;
    private String name;
    private String profile;
    private String email;
    private String date;
    // private LocalDateTime checkInDateTime;
    // private LocalDateTime checkOutDateTime;
    // private String workingHours;
    private String isPresent;
}
