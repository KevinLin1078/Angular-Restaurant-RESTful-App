import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router} from '@angular/router'

import { Service1Service } from './service1.service'
// import {  }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public login = false;
  public username : string = null;
  public provider : boolean;
  constructor(private HttpClient : HttpClient,private Router : Router,public LoginService: Service1Service ){}
  
  ngOnInit() {    // this.Router.navigate(['']) 
    localStorage.getItem('login') == 'false' ? this.LoginService.login = false : this.LoginService.login = true
    localStorage.getItem('provider') == 'false' ? this.LoginService.provider = false : this.LoginService.provider = true
    this.LoginService.username = localStorage.getItem('username')
    
  }
  
  set_login_false(login_state: boolean){
    this.login = login_state
  }

  set_login_true(login_state: boolean){
    console.log(login_state)
    this.login = login_state
  }
  set_provider_true(provider: boolean){
    this.provider = provider
  }

  set_username(username: string){
    this.username = username
  }

  
}
