import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Router } from '@angular/router';
// import { getBuyerMenu } from '../service/menu.service';
import { Service1Service } from '../service/service1.service';


@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})

export class Route1Component implements OnInit {
  public kitchens : any 

  constructor(private router: Router,
              private HttpClient: HttpClient,
              public LoginService: Service1Service
  ){}

  ngOnInit() {
    this.HttpClient.get('http://18.224.151.69').subscribe(response => {
        this.kitchens = response['kitchens'];
    })

    if(this.LoginService.login == false ){
      this.LoginService.go_home()
    }else{

    }

  }

  goMenu(id:number){
    console.log("I am in goDetail")
    this.router.navigate(['/menu/kitchen/'+id]);
  }



}
