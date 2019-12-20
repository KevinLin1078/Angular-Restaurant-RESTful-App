import { Component, OnInit } from '@angular/core';
import { CartService  } from '../cart.service';
import { Service1Service} from '../service1.service'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  public cart ;

  constructor( public CartService: CartService, public LoginService: Service1Service ) { }


  async ngOnInit() {
    if(this.LoginService.login == false ){
      this.LoginService.go_home()
    }else{
      let response = await this.CartService.get_cart_request()
      response.subscribe(async (resp)=>{
        resp['status'] == 'ok' ?  this.cart = await resp['cart'] : alert("need to login")
      })
    }
    
    
  }


  delay(ms: number) { 
    return new Promise( resolve => setTimeout(resolve, ms) ); 
  }

}
