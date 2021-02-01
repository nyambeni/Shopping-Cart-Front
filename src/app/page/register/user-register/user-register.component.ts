import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import  { RegistrationService } from '../../service/registration.service';

import { passwordValidator } from '../../validation/passwordValidator';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

console.log('To the api')

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {

  isEmailAvailableError: boolean  = false;
  constructor( private fb: FormBuilder, private registrationService: RegistrationService,
    private router: Router) { 
  }

  ngOnInit(): void {
   
  }

  registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}')]],

    passCon: ['', Validators.required]
  }, {validator: passwordValidator})

  get firstName(){
    return this.registerForm.get('firstName');
  }

  get lastName(){
    return this.registerForm.get('lastName');
  }
  
   get password(){
    return this.registerForm.get('password');
  }

  get emailAddress(){
    return this.registerForm.get('emailAddress');
  } 

  onSubmit() {
    console.log(this.registerForm.value);
    this.registrationService.register(this.registerForm.value).subscribe((data) => {
      localStorage.setItem('userToken', data.token.token);
      this.router.navigate(['/shop']);
    },
    (err : HttpErrorResponse)=>{
      this.isEmailAvailableError = true;
    });;
  }

}
