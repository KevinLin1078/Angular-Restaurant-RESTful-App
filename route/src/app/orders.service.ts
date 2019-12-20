import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders_url = 'http://localhost:4200/orders/'

  constructor(private HttpClient: HttpClient) { }

  get_orders_request(){
    return this.HttpClient.get<any>(this.orders_url, 
      {/*observe:'response' as 'body',*/ withCredentials: true})
  }
}
