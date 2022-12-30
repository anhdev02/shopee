package com.fit.hitu.shopee.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="brands")
public class Brand {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="brand_name")
	private String brandName;
	
	@Column(name="banner")
	private String banner;
	
//	@OneToMany(mappedBy = "brand", cascade = CascadeType.ALL)
//    private Collection<Product> product;

	public Brand() {
		super();
	}

	public Brand(String brandName, String banner) {
		super();
		this.brandName = brandName;
		this.banner = banner;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getBrandName() {
		return brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}

	public String getBanner() {
		return banner;
	}

	public void setBanner(String banner) {
		this.banner = banner;
	}
	
	
}
