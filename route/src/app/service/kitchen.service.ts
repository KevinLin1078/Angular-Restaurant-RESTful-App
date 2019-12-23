import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})

export class KitchenService {
  provider_kitchen_url = 'http://18.224.151.69/myKitchens/'
  add_kitchen_url = 'http://18.224.151.69/addKitchen/'

  constructor(private HttpClient: HttpClient) { }

  getProviderKitchen(){
    return this.HttpClient.get(this.provider_kitchen_url, {/*observe:'response' as 'body',*/ withCredentials: true})
  }


  addKitchen(formData){
    return this.HttpClient.post(this.add_kitchen_url, formData, {/*observe:'response' as 'body',*/ withCredentials: true})
  }



}
