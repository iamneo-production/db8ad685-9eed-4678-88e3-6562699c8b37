package com.example.demo.services;

import com.example.demo.DTO.Purchase;
import com.example.demo.DTO.PurchaseResponse;

public interface CheckoutService {
	public PurchaseResponse placeOrder(Purchase purchase);
}
