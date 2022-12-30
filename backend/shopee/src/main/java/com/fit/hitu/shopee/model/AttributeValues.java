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
@Table(name="attr_values")
public class AttributeValues {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column(name="product_id")
    private long productId;
    
    @Column(name="attribute_id")
    private long attributeId;
    
    @Column(name="values")
    private String values;
    
//    @ManyToOne 
//	@JoinColumn(name = "fk_attrv_attr")
//    private Attribute atrributeValues_attribute;
//    
//	 @ManyToMany
//	 @JoinTable(name = "fk_attrv_prd", joinColumns = @JoinColumn(name = "product_id"), inverseJoinColumns = @JoinColumn(name = "id"))
//	 private Set<Product> attributeValues_product;
    
	public AttributeValues() {
		super();
	}

	public AttributeValues(long productId, long attributeId, String values) {
		super();
		this.productId = productId;
		this.attributeId = attributeId;
		this.values = values;
	}

	public long getProductId() {
		return productId;
	}

	public void setProductId(long productId) {
		this.productId = productId;
	}

	public long getAttributeId() {
		return attributeId;
	}

	public void setAttributeId(long attributeId) {
		this.attributeId = attributeId;
	}

	public String getValues() {
		return values;
	}

	public void setValues(String values) {
		this.values = values;
	}

	public long getId() {
		return id;
	}
    
}
