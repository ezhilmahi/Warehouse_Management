package com.Project.WareHouse;
import org.springframework.boot.autoconfigure.domain.EntityScan;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@EntityScan(basePackages = "com.Project.WareHouse.model")
@SpringBootApplication
public class WareHouseApplication {

	public static void main(String[] args) {
		SpringApplication.run(WareHouseApplication.class, args);
	}

}
