import { Component, OnInit } from '@angular/core';
import { User } from '../user';

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

  constructor() { }

  ngOnInit() {
  }

  OnSubmit(){

  }

}
