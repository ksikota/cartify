import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 public cartItemList : any =[]
 public productList = new BehaviorSubject<any>([])
  
 constructor() { }

  /*getter for products */
  getProducts(){
    return this.productList.asObservable();
  }

  /* setter for products */
  setProducts(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product)
  }

  /* Add product to Cart */
  addToCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  /* calculate the Total */
  getTotalPrice() : number {
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.unitPrice;
    })
    return grandTotal;
  }

  /* Remove Item from the Cart List */
  removeCartItem(product : any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1)
      }
    })
    this.productList.next(this.cartItemList)
  }
  /* Remove all items from the Cart*/
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
