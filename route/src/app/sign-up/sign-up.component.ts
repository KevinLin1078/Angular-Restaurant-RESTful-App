import { Component, OnInit } from '@angular/core';
import { Service1Service  } from '../service/service1.service'
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  NewUser: User = {
    username:'',
    first_name: '',
    last_name: '',
    password1:'',
    password2:'',
    question_1:'',
    answer_1: '',
    question_2:'',
    answer_2: '',
    is_provider: false
  };
  submitted = false;
  errorMsg = "";

  constructor(public LoginService: Service1Service, private router: Router) { }

  ngOnInit() {
  }


  OnSubmit(){
    this.submitted = true;
    console.log(this.NewUser);
    this.LoginService.sign_up(this.NewUser)
    .subscribe(
      response => console.log('Success!', response),
      error => this.errorMsg = error.statusText
      );
    this.router.navigate(['/employees']);

  }

}
