import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number ;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {(
    this.cartService.getProducts().subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();

    })
  )}
  /* Remove Item from the Cart List using the cart service functions*/
  removeItem(item : any){
    this.cartService.removeCartItem(item);
  }
  /* Empty the cart using the service functions*/
  emptyCart(){
    this.cartService.removeAllCart();
  }
  
}
