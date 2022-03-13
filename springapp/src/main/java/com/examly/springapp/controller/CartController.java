package com.examly.springapp.controller;


import org.springframework.beans.factory.annotation.Autowired;
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
	public List<Cart> getAllCarts(){
		return cService.getAllCarts();
	}	

	
	// add cart rest api
	@PostMapping("/add")
	public void addToCart(@RequestBody Cart cart) {
        cService.addToCart(cart);
	}

    // delete cart rest api
	@DeleteMapping("delete/{cartId}")
	public void deleteCartById(@PathVariable("cartId") Long id){
		cService.deleteCartById(id);
	}
	
	
	// update cart rest api
	
	@PutMapping("/update")
	public void updateCart(@RequestBody Cart cart )
		{ cService.updateCart(cart);
		
		
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
