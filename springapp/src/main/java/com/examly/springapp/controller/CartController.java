package com.examly.springapp.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.examly.springapp.model.Cart;
import com.examly.springapp.service.CartService;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="/api/cart")
public class CartController {

	private final CartService cService;

	@Autowired
    public CartController(CartService cService) {
        this.cService = cService;
    }


	// get all carts
	@GetMapping("/all")
	public ResponseEntity<List<Cart>> getAllCarts(){
		List<Cart> cart = cService.getAllCarts();
		return new ResponseEntity<>(cart,HttpStatus.OK);
	}	

	
	// add cart rest api
	@PostMapping("/add")
	public ResponseEntity<Cart>addToCart(@RequestBody Cart cart) {
		Cart newCart = cService.addToCart(cart);
        return new ResponseEntity<>(newCart, HttpStatus.CREATED);
	}

    // delete cart rest api
	@DeleteMapping("delete/{cartId}")
	public ResponseEntity<?> deleteCartById(@PathVariable("cartId") Long id){
		cService.deleteCartById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	// update cart rest api
	
	@PutMapping("/update")
	public ResponseEntity<Cart>updateCart(@RequestBody Cart cart ){
		Cart updateCart = cService.updateCart(cart);
		return new ResponseEntity<> (updateCart, HttpStatus.OK);
		
		
		/*cart.setId(cartDetails.getId());
		//cart.setProduct(cartDetails.getProduct());
		//cart.setUser(cartDetails.getUser());
		cart.setQuantity(cartDetails.getQuantity());
		cart.setProductName(cartDetails.getProductName());
        cart.setPrice(cartDetails.getPrice());
        cart.setCreateDate(cartDetails.getCreateDate());
		
		Cart updatedCart = cService.updateCart(cart);
        return new ResponseEntity<>(cart, HttpStatus.OK);*/
	}
	
	
	
}
