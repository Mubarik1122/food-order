import { CartItem } from './../shared/model/CartItem';
import { Component } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:Cart;
  constructor(private cartService: CartService){
    this.setCart();

  }
  ngOnInit():void {
  }
  setCart(){
    console.log('Before:', this.cart);
    this.cart = this.cartService.getCart();
    console.log('After:', this.cart);
  }
  removeFRomCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInStrig:string){
    const quantity = parseInt(quantityInStrig);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();

  }
}
