import { Data } from "src/app/classes/Data";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  data:Data[]
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  
  constructor() {}

    getProducts() {
        return this.data;
  }

  getCart() {
      return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(data) {
    let added = false;
    for (let p of this.cart) {
        if (p.id === data.id) {
            p.price += 1;
        added = true;
        break;
      }
    }
    if (!added) {
        data.price = 1;
        this.cart.push(data);
      }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(data) {
    for (let [index, p] of this.cart.entries()) {
        if (p.id === data.id) {
            p.price -= 1;
            if (p.price == 0) {
                this.cart.splice(index, 1);
              }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(data) {
      for (let [index, p] of this.cart.entries()) {
          if (p.id === data.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.price);
        this.cart.splice(index, 1);
      }
    }
  }
}

