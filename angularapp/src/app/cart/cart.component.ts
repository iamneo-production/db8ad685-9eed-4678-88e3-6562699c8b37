import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public product :any =[];
public grandTotal !: number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void{
    this.cartService.getProduct().subscribe((data:any)=>{
       this.product=data;
       this.localCart();
       
    })
  }
  removeItem(product:any)
  {
    this.cartService.removeCartItem(product);
    this.localCart();
  }
  emptycart()
  {
    this.cartService.removeAllCart();
  }
  incQnt(id:any,qnt:any)
  {
    this.product.qnt=this.product.qnt+1;
    return this.product.qnt;
  }
  total:number=0;
  localCart(){
    this.total=this.product.reduce(function(acc:any,val:any){
      return acc+(val.product_price*val.qnt);
      
    },0);
  }

}





