package com.fit.hitu.shopee.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fit.hitu.shopee.dto.HomeInfoDto;
import com.fit.hitu.shopee.model.Product;


public interface HomeRepository extends JpaRepository<Product, Long>{
	@Query(value="select " 
			+ "p.product_name as productName, "
			+ "p.image, "
			+ "p.price, "
			+ "b.banner " 
			+ "from products p " 
			+ "inner join brands b " 
			+ "on p.brand_id = b.id ",
	nativeQuery = true)
	List<HomeInfoDto> getAllProductBrand();
	
	
	
}
