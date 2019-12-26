import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})


export class Service1Service {
  login_url = 'http://18.224.151.69/login/';
  logout_url = 'http://18.224.151.69/logout/';
  signup_url = 'http://18.224.151.69/signup/'

  public login : boolean = false;
  public username : string;
  public provider : boolean;
  
  constructor( private HttpClient: HttpClient, public Router:Router ) { }

  sign_up(formData){
    return this.HttpClient.post<any>(this.signup_url, formData, {}) 

  }

  login_user(formData){
    return this.HttpClient.post<any>(this.login_url, formData ,{/*observe:'response' as 'body',*/ withCredentials: true})
  }
  

  logout_user(){
    this.HttpClient.post<any>(this.logout_url, {}).subscribe((response)=>{
      this.logout()
    })
  }

  logout(){
    this.login = false;
    this.provider = false;
    this.username = null;
    localStorage.setItem('login', 'false');
    localStorage.setItem('username', null);
    localStorage.setItem('provider', 'false');
    this.go_home()
  }

  go_home(){
    this.Router.navigate(['']) 
  }
}


// httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
//   withCredentials: true, 
//   observe: 'response'  }; 