import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from '../shared/model/Cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  cartLength: number = 0;
  cartSubscription: Subscription;

  constructor(private cartService: CartService) {
    this.cartSubscription = this.cartService.cartObservable.subscribe(cart => {
      this.cartLength = cart.items.length;
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }
}
