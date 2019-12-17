import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})


export class Service1Service {
  login_url = 'http://18.222.73.77/login/';
  logout_url = 'http://18.222.73.77/logout/';
  public login : boolean = false;
  public username : string;
  public provider : boolean;
  
  constructor( private HttpClient: HttpClient,  ) { }

  login_user(formData){
    return this.HttpClient.post<any>(this.login_url, formData /*,{observe: 'response'}*/)
  }
  logout(){
    this.login = false;
    this.provider = false;
    this.username = null;
    localStorage.setItem('login', 'false');
    localStorage.setItem('username', null);
    localStorage.setItem('provider', 'false');
  }
  logout_user(){
    this.HttpClient.post<any>(this.logout_url, {}).subscribe((response)=>{
      this.logout()
    })
  }

}
