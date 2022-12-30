package com.fit.hitu.shopee.dto;

public interface OrderDetails {
	long getOrderId();
	String getProductName();
	long getQuantity();
	String getImage();
	long getPrice();
	long getSales();
}
