import { CartItem } from './CartItem';

export class Cart {
  items: CartItem[] = [];
  totalPrice: number = 0;

  constructor(items: CartItem[] = []) {
    this.items = items;
  }

  calculateTotalPrice(): number {
    let total = 0;
    for (let item of this.items) {
      total += item.price;
    }
    return total;
  }

  updateTotalPrice(): void {
    this.totalPrice = this.calculateTotalPrice();
  }
}
