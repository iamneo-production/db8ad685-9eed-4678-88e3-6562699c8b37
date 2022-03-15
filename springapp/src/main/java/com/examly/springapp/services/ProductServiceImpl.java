package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {
	List<Product> list;
	public ProductServiceImpl() {
		list=new ArrayList<>();
	}

    @Autowired
    public ProductRepository productrepo;
    
	@Override
	public List<Product> getAllProducts(){
		return productrepo.findAll();
	}

	public Product addProduct(Product product) {
		return productrepo.save(product);
	}

	public Product getProductById(Long id) {
		Product product = productrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
		return product;
	}
	public Product updateProduct( Long id, Product productDetails){
		Product product = productrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
		
		product.setProduct_name(productDetails.getProduct_name());
		product.setProduct_price(productDetails.getProduct_price());
		product.setProduct_img(productDetails.getProduct_img());
		product.setProduct_desc(productDetails.getProduct_desc());
		product.setProduct_quantity(productDetails.getProduct_quantity());
		
		Product updatedProduct = productrepo.save(product);
		return updatedProduct;
	}
	public Product deleteProduct(Long id){
		Product product = productrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
		
		productrepo.delete(product);
		return product;
	}
}
