package com.amypo.amypobackend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amypo.amypobackend.Models.UserDetailsModel;
import com.amypo.amypobackend.Repository.UserRepository;

@Service
public class UserService{

    @Autowired
    private UserRepository ur;

    public List<UserDetailsModel> getalluserdata(){
    return ur.findAll();
    }

    public UserDetailsModel saveuserdata(UserDetailsModel userdata){
    return ur.save(userdata);
    }

    public UserDetailsModel updateuserdata(UserDetailsModel userdata,String id){
    userdata.setEid(id);
    return ur.save(userdata);
    }

    public void deleteuserbyid(String id){
    ur.deleteById(id);
    }

    public UserDetailsModel getuserbyemail(String email){
    return ur.findByEmail(email).get();
    }
}