import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Service1Service  } from '../service1.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})


export class LoginComponent implements OnInit {
  @Output() login_state_changed : EventEmitter<boolean> = new EventEmitter();
  @Output() provider_state_changed : EventEmitter<boolean> = new EventEmitter();
  @Output() username_changed : EventEmitter<string> = new EventEmitter();
  login_url = 'http://18.222.73.77/login/';
  

  constructor(private HttpClient: HttpClient, public LoginService: Service1Service ) {}
  
  ngOnInit() {    
  }

  resetStorage(login, username, provider){
    this.LoginService.login = login
    this.LoginService.username = username
    this.LoginService.provider = provider
    localStorage.setItem('login', login)
    localStorage.setItem('username',username)
    localStorage.setItem('provider', provider)
  }

  async login(form){  

    const formData = new FormData();
    formData.append("CSRF_TOKEN", '{{ csrf_token() }}')
    formData.append("username", form.value.username)
    formData.append("password", form.value.password)
    let response = await this.LoginService.login_user(formData)
    
    await response.subscribe( async ( response) =>{
      if(response['status'] == 'okRest'){
        await this.resetStorage(true, response['username'], response['provider'])
        console.log('Login Success')
      }else{
        await this.resetStorage(false, null, null);
        console.log('Login Fail')
      }
    })

    
    function delay(ms: number) { 
      return new Promise( resolve => setTimeout(resolve, ms) ); 
    }
    await delay(100);
    // console.log("from login component", this.LoginService.allme())

  }

}

// httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
//   withCredentials: true, 
//   observe: 'response' as 'response' };  