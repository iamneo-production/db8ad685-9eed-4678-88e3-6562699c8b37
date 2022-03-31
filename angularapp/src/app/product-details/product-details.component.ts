import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../cart-service/cart';
import { CartService } from '../cart-service/cart.service';

import { Product } from '../product-service/product';
import { ProductService } from '../product-service/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: any
  product: Product = new Product();

  constructor(private productService: ProductService,private cartService:CartService,
              private route: ActivatedRoute) { }
              ngOnInit(): void {
                this.id=this.route.snapshot.params['id'];
                this.productService.getProductById(this.id).subscribe(data => {
                  this.product=data;
                }, 
                error => console.log(error));
              }
              quantityCheck(value : any){
                  if(value == 0){ return true; }
                  else{ return false; }
              }
              addToCart(theProduct: Product) {

                console.log(`Adding to cart: ${this.product.product_name}, ${this.product.product_price}`);
                const theCartItem = new Cart(this.product);
                this.cartService.addToCart(theCartItem);
              }
            }
  /*ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  handleProductDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const theProductId: number = +this.route.snapshot.paramMap.get('id');

    this.productService.getProductById(theProductId).subscribe(
      data => {
        this.product = data;
      }
    )
  }
*/


