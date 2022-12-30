package com.fit.hitu.shopee.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import com.fit.hitu.shopee.dto.ProductAttribute;
import com.fit.hitu.shopee.dto.ProductHome;
import com.fit.hitu.shopee.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	@Query(value = "select * from products u where u.status = true and u.trash = false and u.category_id = ?1", nativeQuery = true)
    List<Product> findByCategoryId(Long id);
	
	@Query(value = "select * from products where status = true and trash = false and brand_id = ?1", nativeQuery = true)
	List<Product> findByBrandId(Long id);
	
	@Query(value = "SELECT * FROM products WHERE product_name LIKE %:searchTerm%", nativeQuery = true)
    List<Product> searchProductsByName(@Param("searchTerm") String searchTerm);
	
	
	@Query(value = "select "
			+ "a.label, "
			+ "av.values "
			+ "from products p "
			+ "inner join attr_values av "
			+ "on av.product_id = p.id "
			+ "inner join attributes a "
			+ "ON a.id = av.attribute_id "
			+ "where p.status = true and p.trash = false and p.id = ?1",
			nativeQuery = true)
	List<ProductAttribute> getProductAttribute(Long id);
	
	@Query(value = "select "
			+ "id,"
			+ "product_name as productName, "
			+ "image, "
			+ "price, "
			+ "details "
			+ "from products "
			+ "where status = true and trash = false "
			+ "ORDER BY create_at DESC "
			+ "LIMIT 30",
			nativeQuery = true)
	List<ProductHome> getProductHome();
	
	@Query(value = "select * "
			+ "from products "
			+ "where trash = false ",
			nativeQuery = true)
	List<Product> getListProduct();
	
	@Query(value = "select * "
			+ "from products "
			+ "where trash = true ",
			nativeQuery = true)
	List<Product> getTrashProduct();
}
