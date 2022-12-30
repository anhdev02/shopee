package com.fit.hitu.shopee.controller;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fit.hitu.shopee.dto.HomeInfoDto;
import com.fit.hitu.shopee.dto.ProductAttribute;
import com.fit.hitu.shopee.dto.ProductHome;
import com.fit.hitu.shopee.exception.ResourceNotFoundException;
import com.fit.hitu.shopee.model.Order;
import com.fit.hitu.shopee.model.Product;
import com.fit.hitu.shopee.repository.HomeRepository;
import com.fit.hitu.shopee.repository.ProductRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/")
public class ProductController {
	@Autowired
    private ProductRepository productRepository;
	@Autowired
	private HomeRepository homeRepository;
	
	@GetMapping("product")
    public List<Product> getAllProduct(){
        return this.productRepository.findAll();
    }
	
	@GetMapping("producthome")
    public List<ProductHome> getProductHome(){
        return this.productRepository.getProductHome();
    }
	
	@GetMapping("product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable(value = "id") Long productId) throws ResourceNotFoundException {
        Product product = productRepository.findById(productId).orElseThrow(()->new ResourceNotFoundException("Product not found for this id ::" + productId));
        return ResponseEntity.ok().body(product);
    }
	
	@GetMapping("productbycategory/{categoryId}")
    public List<Product> getProductByCategoryId(@PathVariable(value = "categoryId") Long categoryId) {
        return this.productRepository.findByCategoryId(categoryId);
    }
	
	@GetMapping("productbybrand/{brandId}")
    public List<Product> getProductByBrandId(@PathVariable(value = "brandId") Long brandId) {
        return this.productRepository.findByBrandId(brandId);
    }
	
	@GetMapping("/search/{searchTerm}")
    public List<Product> searchUsers(@PathVariable String searchTerm) {
        return productRepository.searchProductsByName(searchTerm);
    }

	@GetMapping("productattribute/{id}")
    public List<ProductAttribute> getProductAttribute(@PathVariable(value = "id") Long id) {
        return this.productRepository.getProductAttribute(id);
    }
	
	@GetMapping("homeproduct")
    public List<HomeInfoDto> getAllProductBrand() {
        return this.homeRepository.getAllProductBrand();
    }
	
	@GetMapping("listproduct")
    public List<Product> getListProduct() {
        return this.productRepository.getListProduct();
    }
	
	@GetMapping("trashproduct")
    public List<Product> getTrashProduct() {
        return this.productRepository.getTrashProduct();
    }
	
	@PostMapping("product")
    public Product createProduct(@RequestBody Product product){
        return this.productRepository.save(product);
    }
	
	@PostMapping("/upload-file")
	public String uploadImage(@RequestParam("file") MultipartFile file) throws Exception {
		System.out.println(file.getOriginalFilename());
		System.out.println(file.getName());
		System.out.println(file.getContentType());
		System.out.println(file.getSize());
		
		String Path_Directory = "D:\\react\\reactshopee\\public\\assets\\imgs";
		Files.copy(file.getInputStream(), Paths.get(Path_Directory+File.separator+file.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);
		return "Successfully Image is uploaded!";
	}
	
	@PutMapping("productquantity/{id}")
	public ResponseEntity<Product> QuantityProduct(@PathVariable(value = "id") Long productId, @Validated @RequestBody Product productDetail) throws ResourceNotFoundException {
		Product product = productRepository.findById(productId).orElseThrow(()->new ResourceNotFoundException("Product not found for this id ::" + productId));
		
		product.setQuantity(productDetail.getQuantity());
		return ResponseEntity.ok(this.productRepository.save(product));
	}

	@PutMapping("product/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable(value = "id") Long productId, @Validated @RequestBody Product productDetail) throws ResourceNotFoundException{
        Product product = productRepository.findById(productId).orElseThrow(()->new ResourceNotFoundException("Product not found for this id ::" + productId));

        product.setProductName(productDetail.getProductName());
        product.setCategoryId(productDetail.getCategoryId());
        product.setBrandId(productDetail.getBrandId());
        product.setImage(productDetail.getImage());
        product.setPrice(productDetail.getPrice());
        product.setDetails(productDetail.getDetails());
        product.setStatus(productDetail.getStatus());
        product.setTrash(productDetail.getTrash());
        product.setQuantity(productDetail.getQuantity());

        return ResponseEntity.ok(this.productRepository.save(product));
    }
	
	@PutMapping("producttrash/{id}")
    public ResponseEntity<Product> trashProduct(@PathVariable(value = "id") Long productId, @Validated @RequestBody Product productDetail) throws ResourceNotFoundException{
        Product product = productRepository.findById(productId).orElseThrow(()->new ResourceNotFoundException("Product not found for this id ::" + productId));
        
        product.setTrash(productDetail.getTrash());

        return ResponseEntity.ok(this.productRepository.save(product));
    }
	
	@DeleteMapping("product/{id}")
    public Map<String, Boolean> deleteProduct(@PathVariable(value = "id") Long productId) throws ResourceNotFoundException {
        Product product = productRepository.findById(productId).orElseThrow(()->new ResourceNotFoundException("Product not found for this id ::" + productId));
        this.productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("delete", Boolean.TRUE);
        return response;
    }

}
