import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart-service/cart';
import { CartService } from '../cart-service/cart.service';
import { Product } from '../product-service/product';
import { ProductService } from '../product-service/product.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  productItems : Product[] = [];
  gridColumns = 4;

  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct(){
    this.productService.getProductList().subscribe(data => {
      this.productItems=data;
    }); 
  }


  addToCart(theProduct: Product) {
    
    console.log(`Adding to cart: ${theProduct.product_name}, ${theProduct.product_price}`);

    // TODO ... do the real work
    const theCartItem = new Cart(theProduct);

    this.cartService.addToCart(theCartItem);
  }

  quantityCheck(value : any){
      if(value == 0){ return true; }
      else{ return false; }
  }
}