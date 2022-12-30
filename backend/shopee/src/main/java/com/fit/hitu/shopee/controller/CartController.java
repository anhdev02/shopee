package com.fit.hitu.shopee.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fit.hitu.shopee.dto.OrderDetails;
import com.fit.hitu.shopee.exception.ResourceNotFoundException;
import com.fit.hitu.shopee.model.Order;
import com.fit.hitu.shopee.model.OrderDetail;
import com.fit.hitu.shopee.model.Product;
import com.fit.hitu.shopee.repository.OrderRepository;
import com.fit.hitu.shopee.repository.OrderdetailRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/cart/")
public class CartController {
	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private OrderdetailRepository orderdetailRepository;
	
	@GetMapping("orderid")
	public Long findIdOrderLast() {
		return this.orderRepository.findIdOrderLast();
	}
	
	@GetMapping("order/{id}")
	public ResponseEntity<Order> getOrderById(@PathVariable(value = "id") Long orderId) throws ResourceNotFoundException{
		Order order = orderRepository.findById(orderId).orElseThrow(()->new ResourceNotFoundException("Order not found for this id ::" + orderId));
        return ResponseEntity.ok().body(order);
	}
	
	@GetMapping("listorder")
	public List<Order> getListOrder() {
		return this.orderRepository.getListOrder();
	}
	
	@GetMapping("orderdetail/{orderId}")
	public List<OrderDetails> getOrderDetailById(@PathVariable(value = "orderId") Long orderid) {
		return this.orderdetailRepository.getOrderById(orderid);
	}
	
	@GetMapping("confirmorder")
	public List<Order> getConfirmOrder() {
		return this.orderRepository.getConfirmOrder();
	}
	
	@GetMapping("trashorder")
	public List<Order> getTrashOrder() {
		return this.orderRepository.getTrashOrder();
	}
	
	@PostMapping("order")
	public Order createOrder(@RequestBody Order order) {
		return this.orderRepository.save(order);
	}
	
	@PutMapping("order/{id}")
	public ResponseEntity<Order> updateOrder(@PathVariable(value = "id") Long orderId, @Validated @RequestBody Order orderDetail) throws ResourceNotFoundException {
		Order order = orderRepository.findById(orderId).orElseThrow(()->new ResourceNotFoundException("Order not found for this id ::" + orderId));
		order.setUsername(orderDetail.getUsername());
		order.setAddress(orderDetail.getAddress());
		order.setPhone(orderDetail.getPhone());
		order.setTotal(orderDetail.getTotal());
		order.setConfirm(orderDetail.getConfirm());
		order.setTrash(orderDetail.getTrash());
		return ResponseEntity.ok(this.orderRepository.save(order));
	}
	
	@PutMapping("ordertrash/{id}")
	public ResponseEntity<Order> TrashOrder(@PathVariable(value = "id") Long orderId, @Validated @RequestBody Order orderDetail) throws ResourceNotFoundException {
		Order order = orderRepository.findById(orderId).orElseThrow(()->new ResourceNotFoundException("Order not found for this id ::" + orderId));
		
		order.setConfirm(orderDetail.getConfirm());
		order.setTrash(orderDetail.getTrash());
		return ResponseEntity.ok(this.orderRepository.save(order));
	}
	
	
	@DeleteMapping("order/{id}")
    public Map<String, Boolean> deleteOrder(@PathVariable(value = "id") Long orderId) throws ResourceNotFoundException {
        Order order = orderRepository.findById(orderId).orElseThrow(()->new ResourceNotFoundException("Order not found for this id ::" + orderId));
        this.orderRepository.delete(order);
        Map<String, Boolean> response = new HashMap<>();
        response.put("delete", Boolean.TRUE);
        return response;
    }
	
	@PostMapping("orderdetail")
	public OrderDetail createOrderDetail(@RequestBody OrderDetail orderdetail) {
		return this.orderdetailRepository.save(orderdetail);
	}
}
