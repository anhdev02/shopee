package com.fit.hitu.shopee.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fit.hitu.shopee.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{
	@Query(value="select "
			+ "* "
			+ "from categories "
			+ "where status = true and trash = false "
			+ "LIMIT 10",
			nativeQuery = true)
	List<Category> getCategory();
	
	@Query(value="select "
			+ "* "
			+ "from categories "
			+ "where trash = false ",
			nativeQuery = true)
	List<Category> getListCategory();
	
	@Query(value="select "
			+ "* "
			+ "from categories "
			+ "where trash = true",
			nativeQuery = true)
	List<Category> getTrashCategory();
}
