package com.fit.hitu.shopee.model;

import java.util.Collection;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="categories")
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="category_name")
	private String categoryName;
	
	@Column(name="parent")
	private long parent;
	
	@Column(name="status")
	private boolean status;
	
	@Column(name="trash")
	private boolean trash;
	
//	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
//	private Collection<Attribute> attribute;
//	
//	@ManyToMany(mappedBy = "product_category")
//    private Set<Product> category_product;
//	
	public Category() {
		super();
	}

	public Category(String categoryName, long parent, boolean status, boolean trash) {
		super();
		this.categoryName = categoryName;
		this.parent = parent;
		this.status = status;
		this.trash = trash;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public long getParent() {
		return parent;
	}

	public void setParent(long parent) {
		this.parent = parent;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public boolean isTrash() {
		return trash;
	}

	public void setTrash(boolean trash) {
		this.trash = trash;
	}

	public long getId() {
		return id;
	}
	
	
}
