import { Component, OnInit } from '@angular/core';
import { KitchenService  } from '../service/kitchen.service';


@Component({
  selector: 'app-provider-kitchen',
  templateUrl: './provider-kitchen.component.html',
  styleUrls: ['./provider-kitchen.component.css']
})
export class ProviderKitchenComponent implements OnInit {
  public kitchens

  constructor(public KitchenService: KitchenService) { }

  async ngOnInit() {
    let response = await this.KitchenService.getProviderKitchen()
    response.subscribe(
      async (resp)=>{
        resp['status'] == 'ok' ?  this.kitchens = await resp['kitchens'] : alert("need to login")
      },
      (error) => {
        alert('Provider kitchen view failed!')
      }
    )

  }


  


}
