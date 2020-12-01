import { Component, OnInit } from '@angular/core';
import { FetchProductsService } from '../services/fetch-products.service';
import { CartService } from '../services/cart.service';
import { Data } from '../classes/Data';
import { Subscription } from 'rxjs';


interface CartItem {
  product: Data;
  quantity: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  cart;
  total = 0;
  cartItems: CartItem[] = [];
  products: Data;
  cartSubscription: Subscription;
  // modalRef: BsModalRef;
  constructor(private fetchProductsService: FetchProductsService,
     private cartService:CartService,
    //  private modalService: BsModalService
     ){}

  ngOnInit(): void {
    this.fetchProductsService.getProducts().subscribe(
      data=>{
        this.products = data;
      }
    );
  }
  increaseCartItem(products) {
    this.cartService.addProduct(products);
  }

}