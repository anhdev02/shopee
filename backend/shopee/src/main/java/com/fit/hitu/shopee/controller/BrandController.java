package com.fit.hitu.shopee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fit.hitu.shopee.model.Brand;
import com.fit.hitu.shopee.repository.BrandRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v2/")
public class BrandController {
	@Autowired
	private BrandRepository brandRepository;
	
	@GetMapping("brandbanner")
	public List<Brand> getBanner(){
		return this.brandRepository.getBanner();
	}
}
