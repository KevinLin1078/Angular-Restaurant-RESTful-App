import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  kitchen_id: number;
  dishes: any;
  kitchen_name: any;

  constructor(public MenuService: MenuService, public ActivatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.kitchen_id = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id'))
    let response = await this.MenuService.getBuyerMenu(this.kitchen_id)
    response.subscribe(async (resp)=>{
      this.dishes = await resp['dishes']
      this.kitchen_name = await resp['kitchen_name']

    },
    (err)=> {
      alert('Error in Kitchen View')
    })
  }

  addToCart(dish){
    
  }

}
