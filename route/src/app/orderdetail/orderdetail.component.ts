import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../service/orders.service';
import { Service1Service } from '../service/service1.service';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})




export class OrderdetailComponent implements OnInit {
  public OrderID;
  public errorMsg;
  public thisOrder;

  constructor(private _orderSvc: OrdersService, public LoginService: Service1Service, private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.LoginService.login == false ){
      this.LoginService.go_home()}
      else{
        this.OrderID = parseInt(this.route.snapshot.paramMap.get('id'));
        this._orderSvc.getoneOrder(this.OrderID).subscribe(
          (data) => this.thisOrder = data,
          (error) => this.errorMsg = error,
          () => console.log('the sequence completed!')
        )
      }

  }

  goBack(){
    this.router.navigate(['/orders']);
  }
}
