import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public orders;

  constructor(public ordersvc: OrdersService) { }

  ngOnInit() {
    this.ordersvc.get_orders_request().subscribe(async (response)=>{
      console.log(response['orders'])
      this.orders = await response['orders']
    })
  }
  
}


