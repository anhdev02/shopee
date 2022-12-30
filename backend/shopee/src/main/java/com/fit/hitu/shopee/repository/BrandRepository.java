package com.fit.hitu.shopee.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fit.hitu.shopee.model.Brand;

public interface BrandRepository extends JpaRepository<Brand, Long>{
	@Query(value = "select * from brands",
	nativeQuery = true)
	List<Brand> getBanner();
}
