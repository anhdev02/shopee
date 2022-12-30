package com.fit.hitu.shopee.model;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.time.DateTimeException;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Null;

@Entity
@Table(name="orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="fullname")
	private String username;
	
	@Column(name="address")
	private String address;
	
	@Column(name="phone")
	private String phone;
	
	@Null
	@Column(name="total")
	private double total;
	
	@Column(name="confirm")
	private Boolean confirm;

	@Column(name="trash")
	private Boolean trash;
	
	@Column(name="order_date")
	Date date;

	public Order(String username, String address, String phone, double total, Boolean trash, Boolean confirm, Date date) {
		super();
		this.username = username;
		this.address = address;
		this.phone = phone;
		this.total = total;
		this.trash = trash;
		this.confirm = confirm;
		this.date = date;
	}

	public Order() {
		super();
	}
	

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getUsername() {
		return username;
	}
	

	public void setUsername(String username) {
		this.username = username;
	}
	
	public Boolean getConfirm() {
		return confirm;
	}

	public void setConfirm(Boolean confirm) {
		this.confirm = confirm;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Boolean getTrash() {
		return trash;
	}

	public void setTrash(Boolean trash) {
		this.trash = trash;
	}

	public long getId() {
		return id;
	}
	
	
}
