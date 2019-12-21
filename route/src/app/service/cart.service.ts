import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart_url = 'http://18.222.73.77/shoppingCart/'
  remove_cart_url = 'http://18.222.73.77/removeDish/'


  constructor(private HttpClient: HttpClient){}

  get_cart_request(){
    return this.HttpClient.get<any>(this.cart_url, {/*observe:'response' as 'body',*/ withCredentials: true})
  }

  removeFromCart(item){
    
    return this.HttpClient.post<any>(this.remove_cart_url + item.id.toString(), {},{/*observe:'response' as 'body',*/ withCredentials: true})
  }



}
