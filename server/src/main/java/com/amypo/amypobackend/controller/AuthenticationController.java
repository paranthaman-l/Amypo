package com.amypo.amypobackend.controller;
import com.amypo.amypobackend.constant.Api;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amypo.amypobackend.services.AuthService;
import com.amypo.amypobackend.dtos.*;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@CrossOrigin(value = Api.FRONTEND)
public class AuthenticationController {

    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<String> register(@RequestBody SignUpDTO request) {
        boolean isRegistered = authService.userRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registered successfully")
                : ResponseEntity.badRequest().body("Something went wrong!");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody LoginDTO request) {
        return ResponseEntity.ok(authService.userAuthentication(request));
    }

    @PostMapping("/byToken")
    public ResponseEntity<AuthenticationResponse> authenticateByToken(@RequestBody TokenDTO tokenDTO) {
        return ResponseEntity.ok(authService.userAuthenticationByToken(tokenDTO));
    }

}
