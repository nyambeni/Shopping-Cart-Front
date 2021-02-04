import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { userValidator } from './../validation/userValidator';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  isLoginError: boolean = false; //dont forget to make this 
  
  constructor( private fb: FormBuilder  ) { }

  loginForm = this.fb.group({
    emailAddress: [''],
    password: [''],
  }, {validator: userValidator});

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
