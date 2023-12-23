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
    private String emp_id;
    private String name;
    private String email;
    private String bloodgroup;
    private String phonenumber;
    private String password;
    private Date dob;
    private String aadharnumber;
    private String pannumber;
    private boolean maritalstatus;
    private String profileimage;
    private String address;
    private String emergencycontact;
private String role;
}