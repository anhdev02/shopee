package com.fit.hitu.shopee.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fit.hitu.shopee.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{
	@Query(value = "SELECT id FROM orders ORDER by id DESC LIMIT 1", nativeQuery = true)
	Long findIdOrderLast();
	
	@Query(value = "SELECT * FROM orders WHERE confirm != true", nativeQuery = true)
	List<Order> getListOrder();
	
	@Query(value = "SELECT * FROM orders WHERE confirm = true", nativeQuery = true)
	List<Order> getConfirmOrder();
	
	@Query(value = "SELECT * FROM orders WHERE trash = true", nativeQuery = true)
	List<Order> getTrashOrder();
}
