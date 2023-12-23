package com.amypo.amypobackend.services;

import java.util.Optional;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.amypo.amypobackend.Models.enumerate.*;
import com.amypo.amypobackend.Models.*;
import com.amypo.amypobackend.dtos.*;
import com.amypo.amypobackend.Repository.*;
import com.amypo.amypobackend.utils.JwtUtil;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthService {

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final AuthenticationManager authenticationManager;
	private final JwtUtil jwtUtil;
	private final UserDetailsService userDetailsService;

	public boolean userRegistration(SignUpDTO request) {
		Optional<UserDetailsModel> isUserExists = userRepository.findByEmail(request.getEmail());
		if (!isUserExists.isPresent()) {
			var user = UserDetailsModel.builder().name(request.getName()).email(request.getEmail())
					.password(passwordEncoder.encode(request.getPassword())).isEnabled(true)
					.role(Role.valueOf(request.getRole().toUpperCase())).build();
			userRepository.save(user);
			return true;
		} else {
			return false;
		}
	}

	public AuthenticationResponse userAuthentication(LoginDTO request) {
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
		var token = jwtUtil.generateToken(user);
		return AuthenticationResponse.builder().token(token).uid(user.getEid()).role(user.getRole()).build();
	}

	public AuthenticationResponse userAuthenticationByToken(TokenDTO tokenDTO) {
		String email = jwtUtil.extractUserEmail(tokenDTO.getToken());
		if (email != null) {
			UserDetails userDetails = this.userDetailsService.loadUserByUsername(email);
			if (jwtUtil.isTokenValid(tokenDTO.getToken(), userDetails)) {
				var user = userRepository.findByEmail(email).orElseThrow();
				return AuthenticationResponse.builder().token(tokenDTO.getToken()).uid(user.getEid()).role(user.getRole()).build();
			}
		}
		return null;
	}

	public boolean EmployeeRegistration(RegisterDTO request) {
		Optional<UserDetailsModel> isUserExists = userRepository.findByEmail(request.getEmail());
		if (!isUserExists.isPresent()) {
			var user = UserDetailsModel.builder().name(request.getName()).email(request.getEmail())
					.password(passwordEncoder.encode(request.getPassword())).isEnabled(true)
					.role(Role.valueOf(request.getRole().toUpperCase())).build();
			userRepository.save(user);
			return true;
		} else {
			return false;
		}
	}
}
