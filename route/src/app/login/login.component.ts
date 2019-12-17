import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';



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
  

  constructor(private HttpClient: HttpClient ) {}
  
  ngOnInit() {/* this.uploadForm = this.FormBuilder.group( {profile: ['']} ); */}

  login(form){  

    const formData = new FormData();
    formData.append("CSRF_TOKEN", '{{ csrf_token() }}')
    formData.append("username", form.value.username)
    formData.append("password", form.value.password)
    
    this.HttpClient.post<any>(this.login_url, formData /*,{observe: 'response'}*/).subscribe(
      (response) => {
        if(response['status'] == 'okRest'){
          this.login_state_changed.emit(true)
          this.username_changed.emit(response['username'])
          if(response['provider'] == true){
            this.provider_state_changed.emit(true)
          }
        }else{
          console.log('Sign in failed') 
        }
        console.log(response)
      }
    );
  }



}

// httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
//   withCredentials: true, 
//   observe: 'response' as 'response' };  