package com.fit.hitu.shopee.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="products")
public class Product {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	
	@Column(name="product_name")
	private String productName;
	
	@Column(name="category_id")
	private long categoryId;
	
	@Column(name="brand_id")
	private long brandId;
	
	@Column(name="image")
	private String image;
	
	@Column(name="price")
	private long price;
	
	@Column(name="sales")
	private long sales;
	
	@Column(name="status")
	private Boolean status;
	
	@Column(name="trash")
	private Boolean trash;
	
	@Column(name="details")
	private String details;
	
	@Column(name="quantity")
	private long quantity;
	

	public Product() {
		super();
	}

	public Product(String productName, long categoryId, long brandId, String image, long price, long sales, Boolean status,
			Boolean trash, String details, long quantity) {
		super();
		this.productName = productName;
		this.categoryId = categoryId;
		this.brandId = brandId;
		this.image = image;
		this.price = price;
		this.sales = sales;
		this.status = status;
		this.trash = trash;
		this.details = details;
		this.quantity = quantity;
	}
	
	

	public long getQuantity() {
		return quantity;
	}

	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}

	public long getSales() {
		return sales;
	}

	public void setSales(long sales) {
		this.sales = sales;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(long categoryId) {
		this.categoryId = categoryId;
	}

	public long getBrandId() {
		return brandId;
	}

	public void setBrandId(long brandId) {
		this.brandId = brandId;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public Boolean getTrash() {
		return trash;
	}

	public void setTrash(Boolean trash) {
		this.trash = trash;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

}
