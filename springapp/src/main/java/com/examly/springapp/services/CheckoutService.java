package com.examly.springapp.services;

import com.examly.springapp.DTO.Purchase;
import com.examly.springapp.DTO.PurchaseResponse;

public interface CheckoutService {
	public PurchaseResponse placeOrder(Purchase purchase);
}
