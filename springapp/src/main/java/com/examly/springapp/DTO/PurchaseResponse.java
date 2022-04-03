package com.examly.springapp.DTO;

public class PurchaseResponse {

   private final String orderTrackingNumber;

public String getOrderTrackingNumber() {
	return orderTrackingNumber;
}

public PurchaseResponse(String orderTrackingNumber) {
	super();
	this.orderTrackingNumber = orderTrackingNumber;
}

}
