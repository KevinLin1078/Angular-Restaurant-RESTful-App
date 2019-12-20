import { Component, OnInit } from '@angular/core';
import { CartService  } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  public cart ;

  constructor( public CartService: CartService ) { }

  ngOnInit() {
    this.CartService.get_cart_request().subscribe(async (response)=>{
      console.log(response['cart'])
      this.cart = await response['cart']
    })
  
  }


}
