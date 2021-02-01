import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items: any;
  itm: string = "";
  price: number=0;
  message: any;
  name: any;
  email: any;
  quant: number=0;

  router: any;


  constructor(private fb: FormBuilder) { }

  formBill= this.fb.group({

    cardNum: ['', [Validators.required, Validators.minLength(3), ]],
    date: ['', [Validators.required, Validators.minLength(5), ]],
    cvv: ['', [Validators.required, Validators.minLength(3), ]],
    cardName: ['', [Validators.required, Validators.minLength(3), ]],
    zip: ['', [Validators.required, Validators.minLength(3), ]],

  });

  ngOnInit(): void {
    
/*After ng serve, uncomment the two comments below
This will view the items selected and the total price

The errors are caused because of the angular restrictions it will not affect the system. 
*/

   //this.items = JSON.parse(localStorage.getItem('items'));
    //this.price = JSON.parse(localStorage.getItem('price'));
    this.message = this.price;
    
    this.name = localStorage.getItem('username');
    this.email = localStorage.getItem('email');

    console.log(this.name);

    console.log(this.price);
  
    
    console.log(localStorage.getItem('items'));
    console.log(this.items.length);
  }

  get cardNum(){
    return this.formBill.get('cardNum');
  } 

  get date(){
    return this.formBill.get('date');
  }

  get cvv(){
    return this.formBill.get('cvv');
  }

  get cardName(){
    return this.formBill.get('cardName');
  }

  get zip(){
    return this.formBill.get('zip');
  }

  onDelete(deletItm: any, itmPrice: any, titl:any)
  {
    this.items.splice(deletItm, 1);
    this.price-=itmPrice;
    this.message = this.price;
    console.log(this.price);  

    for(let item of this.items)
    {
      if(titl == item.title){
        item.numItems--;
        console.log(item);
      }
      item.numItems=1;
    }
    
    console.log(this.items.length);
    console.log(this.items);
  }

  
  onSubmit() {
 
    console.log(this.formBill.value);
   

    for(let item of this.items){
      console.log(item.title);
      console.log(item.price);
      console.log(item.numItems);     
      
      this.quant = this.quant + item.numItems; 
    }

    console.log(this.price);
    console.log(this.quant);

    console.log(localStorage.getItem('id'));
    console.log(this.name);
    console.log(this.email);

    alert("Payment successfully made ");

  }
  
  logOut(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  

}

