import { Component, OnInit } from '@angular/core';
import { Service1Service  } from '../service/service1.service'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(public LoginService: Service1Service) { }

  ngOnInit() {
  }

  async createNewUser(){
    const formData = new FormData();
    formData.append("CSRF_TOKEN", '{{ csrf_token() }}')
    formData.append("username", form.value.username)
    formData.append("password", form.value.password)
    let response = await this.LoginService.sign_up(formData)


  }

}
