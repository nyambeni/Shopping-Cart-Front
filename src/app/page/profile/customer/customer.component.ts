import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from '../../service/registration.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer: any = [];
 

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) { }

  ngOnInit(): void {
    //this.registrationService.userId() has to be converted to a number... 
    this.registrationService.getUser(this.registrationService.userId())
    .subscribe(customer => {
      this.customer = customer[0];
      console.log(customer[0]);
    });
    
  }

  updateForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
  });

  get firstName(){
    return this.updateForm.get('firstName');
  }

  get lastName(){
    return this.updateForm.get('lastName');
  }

  updateUser(){
    this.registrationService.updateUser(this.updateForm.value).subscribe();
    console.log(this.updateForm.value);
    this.customer.firstname = this.updateForm.value.firstName;
    this.customer.lastname = this.updateForm.value.lastName;
    console.log('-----');
  }
}