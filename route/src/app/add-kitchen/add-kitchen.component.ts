import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../service/kitchen.service'





@Component({
  selector: 'app-add-kitchen',
  templateUrl: './add-kitchen.component.html',
  styleUrls: ['./add-kitchen.component.css']
})
export class AddKitchenComponent implements OnInit {

  public imageFile 

  constructor(public KitchenService: KitchenService ) { }

  ngOnInit() {
  }


  async add_kitchen(form){
    const formData = new FormData();
    formData.append("CSRF_TOKEN", '{{ csrf_token() }}')
    formData.append("kitchen_name", form.value.kitchen_name)
    formData.append("image", this.imageFile)

    let repsonse = await this.KitchenService.addKitchen(formData)
    repsonse.subscribe((resp)=>{
      console.log(resp)
    })

    


  }

  saveImage(files){
    this.imageFile = files.item(0);
  }

}
