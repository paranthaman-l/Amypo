package com.amypo.amypobackend.dtos;

// import com.amypo.amypobackend.Models.enumerate.Role;
/**
 * RegisterDTO
 */
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDTO {
    private String empId;
    private String name;
    private String email;
    private String bloodGroup;
    private String phoneNumber;
    private String password;
    private Date dob;
    private String aadhaarNumber;
    private String panNumber;
    private boolean maritalStatus;
    private String profile;
    private String certificateImage;
    private String address;
    private String emergencyContact;
    private String role;
}