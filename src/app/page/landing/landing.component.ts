import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  items: Array<{ id: string, image: string, title: string, availability: string }> = [
    { id: "Shirt", image: "assets/Ladies/Lady1.png", title: "Summer Blouse", availability: "Available Under Ladies" },
    { id: "Jersey", image: "assets/Ladies/Lady2.png", title: "Sleeveless Cardigan", availability: "Available Under Ladies" },
    { id: "Jacket", image: "assets/Ladies/Lady3.png", title: "Trench Coat", availability: "Available Under Ladies" },
    { id: "Suit", image: "assets/Ladies/Lady4.png", title: "Two Piece Short Suite", availability: "Available Under Ladies" },
    { id: "Suit", image: "assets/Ladies/Lady5.png", title: "Two Piece Suit", availability: "Available Under Ladies" },
    { id: "Jacket", image: "assets/Ladies/Lady6.png", title: "Belt Jacket", availability: "Available Under Ladies" },
    { id: "Shirt", image: "assets/Ladies/Lady7.png", title: "Neck Blouse", availability: "Available Under Ladies" },
    { id: "Jacket", image: "assets/Ladies/Lady8.png", title: "Blazer", availability: "Available Under Ladies" },
    { id: "Pants", image: "assets/Ladies/Lady9.png", title: "Baggy Trouser", availability: "Available Under Ladies" },
    { id: "Pants", image: "assets/Ladies/Lady10.png", title: "Mom Jean", availability: "Available Under Ladies" },
    { id: "Dress", image: "assets/Ladies/Lady11.png", title: "Red Pocker Dot Dress", availability: "Available Under Ladies" },
    { id: "Dress", image: "assets/Ladies/Lady12.png", title: "Tight Fit Dress", availability: "Sold Out" },
    { id: "Dress", image: "assets/Ladies/Lady13.png", title: "Glitter Skirt", availability: "Sold Out" },

    { id: "Jersey", image: "assets/Men/Man1.png", title: "Poler Neck", availability: "Available Under Men" },
    { id: "Tie", image: "assets/Men/Man2.png", title: "Yellow Stipped Tie", availability: "Available Under Men" },
    { id: "Short", image: "assets/Men/Man3.png", title: "Summer Short", availability: "Available Under Men" },
    { id: "Jersey", image: "assets/Men/Man4.png", title: "Round Neck Jersey", availability: "Available Under Men" },
    { id: "Shirt", image: "assets/Men/Man5.png", title: "Purple Shirt", availability: "Available Under Men" },
    { id: "Tie", image: "assets/Men/Man6.png", title: "Red Tie & Broucher", availability: "Available Under Men" },
    { id: "Shirt", image: "assets/Men/Man7.png", title: "Baggy T-Shirt", availability: "Available Under Men" },
    { id: "Jacket", image: "assets/Men/Man8.png", title: "Trench Coat", availability: "Available Under Men" },
    { id: "Jacket", image: "assets/Men/Man9.png", title: "Bad Boy Leather Jacket", availability: "Available Under Men" },
    { id: "Short", image: "assets/Men/Man10.png", title: "T-Shirt & Shorts", availability: "Available Under Men" },
    { id: "Shirt", image: "assets/Men/Man11.png", title: "Floral Shirt", availability: "Available Under Men" },
    { id: "Jacket", image: "assets/Men/Man12.png", title: "Trench Coat", availability: "Sold Out" },
    { id: "Shirt", image: "assets/Men/Man13.png", title: "White T-Shirt", availability: "Sold Out" },
    
  ]

  ids: Array<{ type: string}> = [
    {type: "Jersey"},
    {type: "Tie"},
    {type: "Shirt"},
    {type: "Short"},
    {type: "Jacket"},
    {type: "Pants"},
    {type: "Suit"},
    {type: "Dress"},

  ]

  showDropDown: any = false;

  formVar!: FormGroup;
  message: string="";
  Search:string="Search For";

  userID:string = "";

  constructor(private fb: FormBuilder) {
    localStorage.clear();
  }

  onSubmit(user: any){

    this.userID = user.value;
    console.log(this.userID);
   
  }

  ngOnInit() {


  }

  onToggle(){
    this.showDropDown = !this.showDropDown;
  }

  


}
