import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopmen',
  templateUrl: './shopmen.component.html',
  styleUrls: ['./shopmen.component.scss']
})
export class ShopmenComponent implements OnInit {
  items: Array<{ image: string, title: string, price: number, numItems: number }> = [
    { image: "assets/Men/Man1.png", title: "Poler Neck", price: 150, numItems: 0 },
    { image: "assets/Men/Man2.png", title: "Yellow Stipped Tie", price: 50, numItems: 0 },
    { image: "assets/Men/Man3.png", title: "Summer Short", price: 120, numItems: 0 },
    { image: "assets/Men/Man4.png", title: "Round Neck Jersey", price: 150, numItems: 0 },
    { image: "assets/Men/Man5.png", title: "Purple Shirt", price: 100, numItems: 0 },
    { image: "assets/Men/Man6.png", title: "Red Tie & Broucher", price: 80, numItems: 0 },
    { image: "assets/Men/Man7.png", title: "Baggy T-Shirt", price: 120, numItems: 0 },
    { image: "assets/Men/Man8.png", title: "Trench Coat", price: 550, numItems: 0 },
    { image: "assets/Men/Man9.png", title: "Bad Boy Leather Jacket", price: 400, numItems: 0 },
    { image: "assets/Men/Man10.png", title: "T-Shirt & Shorts", price: 300, numItems: 0 },
    { image: "assets/Men/Man11.png", title: "Floral Shirt", price: 150, numItems: 0 }
  ]

  add: Array<{ image: string, title: string, price: number, numItems: number }> = [];

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
  }

  total: number = 0;
  message: string = "R" + this.total.toString();
  i: number = 0;
  itm: string = "";


  plus(item: any) {
    item.numItems++;
    this.total += item.price;
    this.message = "R" + this.total.toString();
    this.i += 1;
    this.itm = this.i.toString();
    localStorage.setItem('price', JSON.stringify(this.total));
    localStorage.setItem('item', JSON.stringify(item));

    console.log(this.add);

    if (item.title == "Poler Neck" && item.numItems > 0) {
    
      this.add.push(item);
    }

    if (item.title == "Yellow Stipped Tie" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Summer Short" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Round Neck Jersey" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Purple Shirt" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Red Tie & Broucher" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Baggy T-Shirt" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Trench Coat" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Bad Boy Leather Jacket" && item.numItems > 0) {
      this.add.push(item);

    }

    if (item.title == "T-Shirt & Shorts" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Floral Shirt" && item.numItems > 0) {
      this.add.push(item);
    }

    localStorage.setItem('items', JSON.stringify(this.add));
    console.log(this.add);

    console.log(this.total);

  }

  minus(item: any, idItm: any) {
    item.numItems--;
    this.total -= item.price;
    this.message = "R" + this.total.toString();
    this.i -= 1;
    this.itm = this.i.toString();
    localStorage.setItem('price', JSON.stringify(this.total));
    localStorage.setItem('item', JSON.stringify(item));
    console.log(item);
    console.log(this.total);

    if (item.title == "Poler Neck" && item.numItems >= 0) {

      this.add.splice(idItm, 1);

    }

    if (item.title == "Yellow Stipped Tie" && item.numItems >= 0) {
      this.add.splice(idItm, 1);

    }

    if (item.title == "Summer Short" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    if (item.title == "Round Neck Jersey" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }
    if (item.title == "Purple Shirt" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    if (item.title == "Red Tie & Broucher" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    if (item.title == "Baggy T-Shirt" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    if (item.title == "Trench Coat" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    if (item.title == "Bad Boy Leather Jacket" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    if (item.title == "T-Shirt & Shorts" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    if (item.title == "Floral Shirt" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    console.log(this.add);
    localStorage.setItem('items', JSON.stringify(this.add));


    console.log(this.add);
  }

  logOut(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}
