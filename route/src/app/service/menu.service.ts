import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu_url = 'http://18.224.151.69/view/menu/kitchen'

  provider_menu_url = 'http://18.224.151.69/menu/kitchen/';

  constructor(private HttpClient: HttpClient) { }

  getBuyerMenu(id){
    return this.HttpClient.get(this.menu_url+id, {/*observe:'response' as 'body',*/ withCredentials: true})
  }

  getProvider(id){
    
    return this.HttpClient.get(this.provider_menu_url+id+'/', {/*observe:'response' as 'body',*/ withCredentials: true})
  }

}
