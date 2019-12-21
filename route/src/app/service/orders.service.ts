import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders_url = 'http://18.222.73.77/orders/'

  constructor(private HttpClient: HttpClient) { }

  get_orders(){
    return this.HttpClient.get<any>(this.orders_url, {/*observe:'response' as 'body',*/ withCredentials: true})
  }

  getoneOrder(id){
    return this.HttpClient.get<any>(this.orders_url+id, {/*observe:'response' as 'body',*/ withCredentials: true})
  }
}
