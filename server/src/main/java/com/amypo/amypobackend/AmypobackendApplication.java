package com.amypo.amypobackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class AmypobackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AmypobackendApplication.class, args);
	}

}
