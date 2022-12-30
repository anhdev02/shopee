package com.fit.hitu.shopee.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fit.hitu.shopee.model.ERole;
import com.fit.hitu.shopee.model.Role;
import com.fit.hitu.shopee.model.User;



@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
	@Query(value = "SELECT * FROM roles WHERE status = true and trash = false", nativeQuery = true)
	List<Role> getListRole();
	
	@Query(value = "SELECT * FROM roles WHERE trash = true", nativeQuery = true)
	List<Role> getTrashRole();
}