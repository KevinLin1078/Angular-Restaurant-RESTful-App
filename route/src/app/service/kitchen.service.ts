import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})

export class KitchenService {
  provider_kitchen_url = 'http://18.222.73.77/myKitchens/'
  
  constructor(private HttpClient: HttpClient) { }

  getProviderKitchen(){
    return this.HttpClient.get(this.provider_kitchen_url, {/*observe:'response' as 'body',*/ withCredentials: true})
  }

}
