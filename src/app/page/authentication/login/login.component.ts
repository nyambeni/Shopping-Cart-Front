import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../service/registration.service';
import { userValidator } from '../../validation/userValidator';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError: boolean = false;

  constructor( private fb: FormBuilder, private registerService: RegistrationService, private router: Router ) { }

  loginForm = this.fb.group({
    emailAddress: [''],
    password: [''],
  }, {validator: userValidator});

  ngOnInit(): void {
  }

  onSubmit() {
  
    this.registerService.logIn(this.loginForm.value).subscribe((data: any) => {
      localStorage.setItem('userToken', data.token.token);
      localStorage.setItem('id', data.results[0].customer_id);
      localStorage.setItem('username', data.results[0].firstname);
      localStorage.setItem('email', data.results[0].email);
      this.router.navigate(['/shop']);
    },
    (err : HttpErrorResponse)=>{
      console.log(err);
      this.isLoginError = true;
    });
  }

}
