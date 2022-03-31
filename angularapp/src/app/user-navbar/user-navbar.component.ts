import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Product } from '../product-service/product';
import { ProductService } from '../product-service/product.service';
@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
    product: Product[] = [];
    product_name: any
    constructor(private productService:ProductService,
      private router: Router) { }

      ngOnInit(): void {
        this.getProduct();
        
         }
         
         private getProduct(){
           this.productService.getProductList().subscribe(data => {
             this.product=data;
           }); 
         }
 Search(){
   if(this.product_name==""){
     this.ngOnInit();
 }
 else{
   this.product=this.product.filter(data =>{
     return data.product_name.toLocaleLowerCase().match(this.product_name.toLocaleLowerCase());
   });
  }
}

}


