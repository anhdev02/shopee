package com.fit.hitu.shopee.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="attributes")
public class Attribute {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="category_id")
	private long categoryId;
	
	@Column(name="label")
	private String label;
	
//	@ManyToOne 
//	@JoinColumn(name = "fk_attr_cat")
//	private Category category;
//	
//	@OneToMany(mappedBy = "attributeValues_attribute", cascade = CascadeType.ALL)
//	private Collection<AttributeValues> attributeValues;

	public Attribute() {
		super();
	}

	public Attribute(long categoryId, String label) {
		super();
		this.categoryId = categoryId;
		this.label = label;
	}

	public long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(long categoryId) {
		this.categoryId = categoryId;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public long getId() {
		return id;
	}
	
	
}
