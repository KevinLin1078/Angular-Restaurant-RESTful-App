import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
  public OrderID;
  public errorMsg;
  public thisOrder;

  constructor(private _orderSvc: OrdersService, private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.OrderID = parseInt(this.route.snapshot.paramMap.get('id'));
    this._orderSvc.getoneOrder(this.OrderID).subscribe(
      (data) => this.thisOrder = data,
      (error) => this.errorMsg = error,
      () => console.log('the sequence completed!')
    )
  }

  goBack(){
    this.router.navigate(['/orders']);
  }
}
