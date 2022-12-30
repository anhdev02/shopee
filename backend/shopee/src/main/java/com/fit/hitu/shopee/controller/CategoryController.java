package com.fit.hitu.shopee.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.fit.hitu.shopee.exception.ResourceNotFoundException;
import com.fit.hitu.shopee.model.Category;
import com.fit.hitu.shopee.model.Product;
import com.fit.hitu.shopee.repository.CategoryRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v3/")
public class CategoryController {
	@Autowired
	private CategoryRepository categoryRepository;
	
	@GetMapping("category")
	public List<Category> getAllCategory(){
		return this.categoryRepository.findAll();
	}
	
	@GetMapping("category/{id}")
	public ResponseEntity<Category> getCategoryById(@PathVariable(value="id") Long categoryId) throws ResourceNotFoundException {
		Category category = categoryRepository.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("Category not found for this id ::" + categoryId));
		return ResponseEntity.ok().body(category);
	}
	
	@GetMapping("categoryheader")
	public List<Category> getCategory(){
		return this.categoryRepository.getCategory();
	}
	
	@GetMapping("listcategory")
	public List<Category> getListCategory(){
		return this.categoryRepository.getListCategory();
	}
	
	@GetMapping("trashcategory")
	public List<Category> getTrashCategory(){
		return this.categoryRepository.getTrashCategory();
	}
	
	@PostMapping("category")
	public Category createCategory(@RequestBody Category category) {
		return this.categoryRepository.save(category);
	}
	
	@PutMapping("category/{id}")
	public ResponseEntity<Category> updateCategory(@PathVariable(value = "id") Long categoryId, @Validated @RequestBody Category categoryDetail) throws ResourceNotFoundException{
		Category category = categoryRepository.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("Category not found for this id ::" + categoryId));
		
		category.setCategoryName(categoryDetail.getCategoryName());
		category.setParent(categoryDetail.getParent());
		category.setStatus(categoryDetail.isStatus());
		category.setTrash(categoryDetail.isTrash());
		return ResponseEntity.ok(this.categoryRepository.save(category));
	}
	
	@PutMapping("categorytrash/{id}")
	public ResponseEntity<Category> TrashCategory(@PathVariable(value = "id") Long categoryId, @Validated @RequestBody Category categoryDetail) throws ResourceNotFoundException{
		Category category = categoryRepository.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("Category not found for this id ::" + categoryId));
		category.setTrash(categoryDetail.isTrash());
		return ResponseEntity.ok(this.categoryRepository.save(category));
	}
	
	@DeleteMapping("category/{id}")
    public Map<String, Boolean> deleteCategory(@PathVariable(value = "id") Long categoryId) throws ResourceNotFoundException {
        Category category = categoryRepository.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("Category not found for this id ::" + categoryId));
        this.categoryRepository.delete(category);
        Map<String, Boolean> response = new HashMap<>();
        response.put("delete", Boolean.TRUE);
        return response;
    }
}
