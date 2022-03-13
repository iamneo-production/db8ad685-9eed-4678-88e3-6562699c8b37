import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class CartService{
  private baseURL="http://localhost:8080/api/cart/";
  public cartItemList : any=[]
  public productList=new BehaviorSubject<any>([]);
  public search=new BehaviorSubject<string>("");

      constructor(){}
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
          this.cartItemList[i].qnt++;
          productExists=true;
          break;
        }
      }
      if(!productExists){
        Object.assign(product,{'qnt':1});
        this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      window.alert("product added to cart!!");

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
      this.cartItemList=[]
      this.productList.next(this.cartItemList);
    }
    
}