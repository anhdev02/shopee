package com.fit.hitu.shopee.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fit.hitu.shopee.model.Order;
import com.fit.hitu.shopee.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);

  Boolean existsByUsername(String username);

  Boolean existsByPhone(String phone);
  
	@Query(value = "SELECT * FROM users WHERE trash = false", nativeQuery = true)
	List<User> getListUser();
	
	@Query(value = "SELECT * FROM users WHERE trash = true", nativeQuery = true)
	List<User> getTrashUser();
}
