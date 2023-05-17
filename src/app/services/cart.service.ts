import { BehaviorSubject } from 'rxjs';
import { Cart } from '../shared/model/Cart';
import { Foods } from '../shared/model/food';
import { CartItem } from '../shared/model/CartItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly CART_KEY = 'cart';
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject = new BehaviorSubject<Cart>(this.cart);
  cartObservable = this.cartSubject.asObservable();

  constructor() { }

  private setCartToLocalStorage(cart: Cart) {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem(this.CART_KEY);
    return cartJson ? new Cart(JSON.parse(cartJson).items) : new Cart();
  }

  addToCart(food: Foods): void {
    let cartItem = this.cart.items.find(item => item.food.id == food.id)
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1)
      return;
    }
    this.cart.items.push(new CartItem(food));
    this.cart.updateTotalPrice();
    this.setCartToLocalStorage(this.cart);
    this.cartSubject.next(this.cart);
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
    this.cart.updateTotalPrice();
    this.setCartToLocalStorage(this.cart);
    this.cartSubject.next(this.cart);
  }

  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    this.cart.updateTotalPrice();
    this.setCartToLocalStorage(this.cart);
    this.cartSubject.next(this.cart);
  }


  getCart(): Cart {
    return this.cart;
  }
}
