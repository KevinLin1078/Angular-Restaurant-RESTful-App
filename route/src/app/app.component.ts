import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router} from '@angular/router'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public login : boolean = false


  constructor(private HttpClient : HttpClient,
              private Router : Router
            ){}
  
  ngOnInit() {    // this.Router.navigate(['']) 
  }
  
  set_login_false(){
    this.login = false
  }
  set_login_true(){
    this.login = true
  }
  
}
