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
    question_1:'What is your favorite color?',
    answer_1: '',
    question_2:'What is your favorite place to live?',
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
