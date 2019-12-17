import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router} from '@angular/router'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public login = false;
  public username : string = null;
  public provider : boolean;
  constructor(private HttpClient : HttpClient,
              private Router : Router
            ){}
  
  ngOnInit() {    // this.Router.navigate(['']) 
  }
  
  set_login_false(login_state: boolean){
    this.login = login_state
  }

  set_login_true(login_state: boolean){
    console.log("here")
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
