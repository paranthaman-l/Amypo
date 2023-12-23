package com.amypo.amypobackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.amypo.amypobackend.Models.UserDetailsModel;
import com.amypo.amypobackend.services.UserService;
import com.amypo.amypobackend.constant.Api;
@RestController
@CrossOrigin("*")
@RequestMapping({Api.ADMIN,Api.TRAINER,Api.DEVELOPER,Api.CONTENTDEVELOPER,Api.BDM})
public class UserController {

    @Autowired
    private UserService us;

    @GetMapping("/getuser")
    public List<UserDetailsModel> getalluserdata() {
        return us.getalluserdata();
    }

    @PostMapping("/saveuser")
    public UserDetailsModel saveuserdata(@RequestBody UserDetailsModel userdata) {
        return us.saveuserdata(userdata);
    }

    @PutMapping("/updatedata")
    public UserDetailsModel updateuserdata(@RequestBody UserDetailsModel userdata, @RequestParam String id) {
        return us.updateuserdata(userdata, id);
    }

    @DeleteMapping("/deleteuser")
    public void deletebyid(@RequestParam String id) {
        us.deleteuserbyid(id);
    }
}