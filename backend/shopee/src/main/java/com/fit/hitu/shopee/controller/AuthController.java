package com.fit.hitu.shopee.controller;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fit.hitu.shopee.exception.ResourceNotFoundException;
import com.fit.hitu.shopee.model.Category;
import com.fit.hitu.shopee.model.ERole;
import com.fit.hitu.shopee.model.Email;
import com.fit.hitu.shopee.model.Product;
import com.fit.hitu.shopee.model.Role;
import com.fit.hitu.shopee.model.User;
import com.fit.hitu.shopee.payload.request.LoginRequest;
import com.fit.hitu.shopee.payload.request.SignupRequest;
import com.fit.hitu.shopee.payload.request.UserRequest;
import com.fit.hitu.shopee.payload.response.JwtResponse;
import com.fit.hitu.shopee.payload.response.MessageResponse;
import com.fit.hitu.shopee.repository.RoleRepository;
import com.fit.hitu.shopee.repository.UserRepository;
import com.fit.hitu.shopee.security.jwt.JwtUtils;
import com.fit.hitu.shopee.security.services.UserDetailsImpl;
//import com.fit.hitu.shopee.service.EmailSenderService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
//	@Autowired
//	private EmailSenderService emailSenderService;
	
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;
	
	@Autowired
	private com.fit.hitu.shopee.service.EmailSenderService emailSenderService;
	
	@PostMapping("/send-email")
	public String sendMail(@RequestBody Email email) throws Exception {
		emailSenderService.sendEmail(email.getEmailAddress(), email.getEmailSubject(), email.getEmailBody());
		return "Send mail successfully!";
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt, 
												 userDetails.getId(), 
												 userDetails.getUsername(), 
												 userDetails.getPhone(), 
												 userDetails.getEmail(),
												 roles));
	}
	@PutMapping("usertrash/{id}")
	public ResponseEntity<User> TrashUser(@PathVariable(value = "id") Long userId, @Validated @RequestBody Category userDetail) throws ResourceNotFoundException{
		User user = userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User not found for this id ::" + userId));
		user.setTrash(userDetail.isTrash());
		return ResponseEntity.ok(this.userRepository.save(user));
	}
	
	@PutMapping("user/{id}")
    public ResponseEntity<?> updateUser(@PathVariable(value = "id") Long userId, @Validated @RequestBody UserRequest userDetail) throws ResourceNotFoundException{
        User user = userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User not found for this id ::" + userId));

		if (userRepository.existsByUsername(userDetail.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}
		
		if (userRepository.existsByPhone(userDetail.getPhone())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Phone is already in use!"));
		}
        
		user.setUsername(userDetail.getUsername());
		user.setFullName(userDetail.getFullname());
		user.setAddress(userDetail.getAddress());
		user.setPhone(userDetail.getPhone());
		user.setPassword(encoder.encode(userDetail.getPassword()));
		user.setEmail(userDetail.getEmail());
		
		Set<String> strRoles = userDetail.getRole();
		Set<Role> roles = new HashSet<>();
		
		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);
					break;
				case "seller":
					Role selRole = roleRepository.findByName(ERole.ROLE_SELLER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(selRole);

					break;
				case "mod":
					Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(modRole);

					break;
				default:
					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

		user.setRoles(roles);
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User edited successfully!"));
    }
	
	@DeleteMapping("user/{id}")
    public Map<String, Boolean> deleteProduct(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User not found for this id ::" + userId));
        this.userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("delete", Boolean.TRUE);
        return response;
    }
	
	@PostMapping("/user")
	public ResponseEntity<?> addUser(@Valid @RequestBody UserRequest userRequest){
		if (userRepository.existsByUsername(userRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}
		
		if (userRepository.existsByPhone(userRequest.getPhone())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Phone is already in use!"));
		}
		
		User user = new User(
				userRequest.getUsername(),
				userRequest.getFullname(),
				userRequest.getAddress(),
				userRequest.getPhone(),
				 encoder.encode(userRequest.getPassword()),
				 userRequest.getEmail());
		
		Set<String> strRoles = userRequest.getRole();
		Set<Role> roles = new HashSet<>();
		
		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);
					break;
				case "seller":
					Role selRole = roleRepository.findByName(ERole.ROLE_SELLER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(selRole);

					break;
				case "mod":
					Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(modRole);

					break;
				default:
					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

		user.setRoles(roles);
		userRepository.save(user);
		
		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (userRepository.existsByPhone(signUpRequest.getPhone())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Phone is already in use!"));
		}

		// Create new user's account
		User user = new User(signUpRequest.getUsername(), 
							 signUpRequest.getPhone(),
							 encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);

					break;
				case "seller":
					Role modRole = roleRepository.findByName(ERole.ROLE_SELLER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(modRole);

					break;
				default:
					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

		user.setRoles(roles);
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}
