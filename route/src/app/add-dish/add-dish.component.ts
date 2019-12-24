import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service'



@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

  KitchenId: number;

  constructor( public MenuService: MenuService) { }

  ngOnInit() {
    this.MenuService.getProviderMenu(this.KitchenId)
  }

  addDish(dish){

  }

}
