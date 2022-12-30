package com.fit.hitu.shopee.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fit.hitu.shopee.dto.OrderDetails;
import com.fit.hitu.shopee.model.OrderDetail;

public interface OrderdetailRepository extends JpaRepository<OrderDetail, Long>{
	@Query(value = "SELECT "
			+ "od.order_id as orderId, p.product_name as productName, od.quantity, p.image, p.price, p.sales "
			+ "FROM order_details od "
			+ "inner join products  p "
			+ "ON od.product_id = p.id "
			+ "WHERE od.order_id =:orderid", nativeQuery = true)
	List<OrderDetails> getOrderById(@Param("orderid") Long orderid);
}
