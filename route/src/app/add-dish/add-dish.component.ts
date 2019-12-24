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

  addDish(form){
    const formData = new FormData();
    formData.append("CSRF_TOKEN", '{{ csrf_token() }}')
    formData.append("dish_name", form.value.dish_name)
    formData.append("price", form.value.price)
    formData.append('is_vegan',form.value.is_vegan)
    alert(formData)

  }

}
