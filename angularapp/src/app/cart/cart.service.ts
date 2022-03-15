import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class CartService{
  private baseURL="http://localhost:8090/api/v1/cart";
  public cartItemList : any=[]
  public productList=new BehaviorSubject<any>([]);
  public search=new BehaviorSubject<string>("");

    constructor(private httpClient: HttpClient){}
    getProduct()
    {
       return this.productList.asObservable();
    }
    setProduct(product : any)
    {
      this.cartItemList.push(...product);
      this.productList.next(product);
    }
    addToCart(product:any)
    {
      let productExists=false
      for(let i in this.cartItemList)
      {
        if(this.cartItemList[i].id===product.id)
        {
          this.cartItemList[i].quantity++;
          productExists=true;
          break;
        }
      }
      if(!productExists){
        Object.assign(product,{'quantity':1});
        this.cartItemList.push(product);
        this.productList.next(this.cartItemList);
        window.alert("Product Added To Cart!!");
      }
    }
    removeCartItem(product:any){
      this.cartItemList.map((a:any,index:any)=>{
        if(product.id===a.id)
        {
          this.cartItemList.splice(index,1);
        }
      })
      this.productList.next(this.cartItemList);
    }
    removeAllCart()
    {
      this.cartItemList=[];
      this.productList.next(this.cartItemList);
    }
    
}