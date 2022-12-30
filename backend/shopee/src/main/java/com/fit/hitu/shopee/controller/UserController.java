package com.fit.hitu.shopee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fit.hitu.shopee.exception.ResourceNotFoundException;
import com.fit.hitu.shopee.model.Category;
import com.fit.hitu.shopee.model.Order;
import com.fit.hitu.shopee.model.Role;
import com.fit.hitu.shopee.model.User;
import com.fit.hitu.shopee.repository.RoleRepository;
import com.fit.hitu.shopee.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user/")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;
	
	@GetMapping("{id}")
	public ResponseEntity<User> getUserById(@PathVariable(value="id") Long userId) throws ResourceNotFoundException{
		User user = userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User not found for this id ::" + userId));
		return ResponseEntity.ok().body(user);
	}
	
	@GetMapping("listuser")
	public List<User> getListUser() {
		return this.userRepository.getListUser();
	}
	
	@GetMapping("trashuser")
	public List<User> getTrashUser() {
		return this.userRepository.getTrashUser();
	}
	
	@GetMapping("listrole")
	public List<Role> getListRole() {
		return this.roleRepository.getListRole();
	}
	
	@GetMapping("trashrole")
	public List<Role> getTrashRole() {
		return this.roleRepository.getTrashRole();
	}
}
