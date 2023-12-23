package com.amypo.amypobackend.services;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.amypo.amypobackend.Repository.UserRepository;

/**
 * AdminService
 */
@Service
public class AdminService {
    @Autowired
    private UserRepository userRepository;

}