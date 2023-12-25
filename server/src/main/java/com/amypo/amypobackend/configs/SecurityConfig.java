package com.amypo.amypobackend.configs;

import static com.amypo.amypobackend.Models.enumerate.Permission.ADMIN_CREATE;
import static com.amypo.amypobackend.Models.enumerate.Permission.ADMIN_DELETE;
import static com.amypo.amypobackend.Models.enumerate.Permission.ADMIN_READ;
import static com.amypo.amypobackend.Models.enumerate.Permission.ADMIN_UPDATE;

import static com.amypo.amypobackend.Models.enumerate.Permission.TRAINER_CREATE;
import static com.amypo.amypobackend.Models.enumerate.Permission.TRAINER_DELETE;
import static com.amypo.amypobackend.Models.enumerate.Permission.TRAINER_READ;
import static com.amypo.amypobackend.Models.enumerate.Permission.TRAINER_UPDATE;

import static com.amypo.amypobackend.Models.enumerate.Permission.DEVELOPER_CREATE;
import static com.amypo.amypobackend.Models.enumerate.Permission.DEVELOPER_DELETE;
import static com.amypo.amypobackend.Models.enumerate.Permission.DEVELOPER_READ;
import static com.amypo.amypobackend.Models.enumerate.Permission.DEVELOPER_UPDATE;

import static com.amypo.amypobackend.Models.enumerate.Permission.CONTENTDEVELOPER_CREATE;
import static com.amypo.amypobackend.Models.enumerate.Permission.CONTENTDEVELOPER_DELETE;
import static com.amypo.amypobackend.Models.enumerate.Permission.CONTENTDEVELOPER_READ;
import static com.amypo.amypobackend.Models.enumerate.Permission.CONTENTDEVELOPER_UPDATE;

import static com.amypo.amypobackend.Models.enumerate.Permission.BDM_CREATE;
import static com.amypo.amypobackend.Models.enumerate.Permission.BDM_DELETE;
import static com.amypo.amypobackend.Models.enumerate.Permission.BDM_READ;
import static com.amypo.amypobackend.Models.enumerate.Permission.BDM_UPDATE;

import static com.amypo.amypobackend.Models.enumerate.Role.CONTENTDEVELOPER;
import static com.amypo.amypobackend.Models.enumerate.Role.DEVELOPER;
import static com.amypo.amypobackend.Models.enumerate.Role.TRAINER;
import static com.amypo.amypobackend.Models.enumerate.Role.ADMIN;
import static com.amypo.amypobackend.Models.enumerate.Role.BDM;

import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.amypo.amypobackend.constant.Api;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

        private final JwtAuthenticationFilter jwtAuthenticationFilter;
        private final AuthenticationProvider authenticationProvider;

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
                httpSecurity.cors(corsConfirguarationSource -> corsConfirguarationSource
                                .configurationSource(corsConfigurationSource()))
                                .csrf(csrf -> csrf.disable())
                                .authorizeHttpRequests(authorize -> authorize
                                                .requestMatchers(Api.AUTH + "/**").permitAll()
                                                .requestMatchers(Api.COMMON + "/**")
                                                .hasAnyRole(ADMIN.name(),DEVELOPER.name(),CONTENTDEVELOPER.name(),BDM.name(),TRAINER.name())
                                                .requestMatchers(Api.ADMIN + "/**")
                                                .hasRole(ADMIN.name())
                                                .requestMatchers(GET, Api.ADMIN + "/**")
                                                .hasAuthority(ADMIN_READ.name())
                                                .requestMatchers(POST, Api.ADMIN + "/**")
                                                .hasAuthority(ADMIN_CREATE.name())
                                                .requestMatchers(PUT, Api.ADMIN + "/**")
                                                .hasAuthority(ADMIN_UPDATE.name())
                                                .requestMatchers(DELETE, Api.ADMIN + "/**")
                                                .hasAuthority(ADMIN_DELETE.name())

                                                .requestMatchers(Api.TRAINER + "/**")
                                                .hasRole(TRAINER.name())
                                                .requestMatchers(GET, Api.TRAINER + "/**")
                                                .hasAuthority(TRAINER_READ.name())
                                                .requestMatchers(POST, Api.TRAINER + "/**")
                                                .hasAuthority(TRAINER_CREATE.name())
                                                .requestMatchers(PUT, Api.TRAINER + "/**")
                                                .hasAuthority(TRAINER_UPDATE.name())
                                                .requestMatchers(DELETE, Api.TRAINER + "/**")
                                                .hasAuthority(TRAINER_DELETE.name())

                                                .requestMatchers(Api.DEVELOPER + "/**")
                                                .hasRole(DEVELOPER.name())
                                                .requestMatchers(GET, Api.DEVELOPER + "/**")
                                                .hasAuthority(DEVELOPER_READ.name())
                                                .requestMatchers(POST, Api.DEVELOPER + "/**")
                                                .hasAuthority(DEVELOPER_CREATE.name())
                                                .requestMatchers(PUT, Api.DEVELOPER + "/**")
                                                .hasAuthority(DEVELOPER_UPDATE.name())
                                                .requestMatchers(DELETE, Api.DEVELOPER + "/**")
                                                .hasAuthority(DEVELOPER_DELETE.name())

                                                .requestMatchers(Api.CONTENTDEVELOPER + "/**")
                                                .hasRole(CONTENTDEVELOPER.name())
                                                .requestMatchers(GET, Api.CONTENTDEVELOPER + "/**")
                                                .hasAuthority(CONTENTDEVELOPER_READ.name())
                                                .requestMatchers(POST, Api.CONTENTDEVELOPER + "/**")
                                                .hasAuthority(CONTENTDEVELOPER_CREATE.name())
                                                .requestMatchers(PUT, Api.CONTENTDEVELOPER + "/**")
                                                .hasAuthority(CONTENTDEVELOPER_UPDATE.name())
                                                .requestMatchers(DELETE, Api.CONTENTDEVELOPER + "/**")
                                                .hasAuthority(CONTENTDEVELOPER_DELETE.name())

                                                .requestMatchers(Api.BDM + "/**")
                                                .hasRole(BDM.name())
                                                .requestMatchers(GET, Api.BDM + "/**")
                                                .hasAuthority(BDM_READ.name())
                                                .requestMatchers(POST, Api.BDM + "/**")
                                                .hasAuthority(BDM_CREATE.name())
                                                .requestMatchers(PUT, Api.BDM + "/**")
                                                .hasAuthority(BDM_UPDATE.name())
                                                .requestMatchers(DELETE, Api.BDM + "/**")
                                                .hasAuthority(BDM_DELETE.name())

                                                .anyRequest().authenticated())
                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                .authenticationProvider(authenticationProvider)
                                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
                return httpSecurity.build();
        }

        @Bean
        public CorsConfigurationSource corsConfigurationSource() {
                CorsConfiguration configuration = new CorsConfiguration();
                configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
                configuration.setAllowCredentials(true);
                configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
                configuration.setAllowedOrigins(Arrays.asList(Api.FRONTEND));
                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", configuration);
                return source;
        }
}
