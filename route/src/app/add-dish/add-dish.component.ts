import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service'
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  public dishes;
  // KitchenId: number;

  constructor( public MenuService: MenuService, public ActivatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    let KitchenId = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id'))
    let response = await this.MenuService.getProviderMenu(KitchenId)
    response.subscribe(async (resp)=>{
      resp['status'] == 'ok' ?  this.dishes = await resp['dishes'] : alert("Django Error")
    },
    (err)=> {
      alert('cannot view')
    })
  }

  addDish(form){
    const formData = new FormData();
    formData.append("CSRF_TOKEN", '{{ csrf_token() }}')
    formData.append("dish_name", form.value.dish_name)
    formData.append("price", form.value.price)
    formData.append('is_vegan',form.value.is_vegan)
    alert(formData)

  }

}
