import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../service/orders.service';
import { Service1Service} from '../service/service1.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public orders;

  constructor(public ordersvc: OrdersService, public LoginService: Service1Service) { }

  ngOnInit() {
    if(this.LoginService.login == false ){
      this.LoginService.go_home()
    }else{    
      this.ordersvc.get_orders_request().subscribe(async (response)=>{
        console.log(response['orders'])
        this.orders = await response['orders']
      }
      )}
    }
  }


