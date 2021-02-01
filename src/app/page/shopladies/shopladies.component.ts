import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopladies',
  templateUrl: './shopladies.component.html',
  styleUrls: ['./shopladies.component.scss']
})
export class ShopladiesComponent implements OnInit {
  items: Array<{ image: string, title: string, price: number, numItems: number }> = [
    { image: "assets/Ladies/Lady1.png", title: "Summer Blouse", price: 250, numItems: 0 },
    { image: "assets/Ladies/Lady2.png", title: "Sleeveless Cardigan", price: 300, numItems: 0 },
    { image: "assets/Ladies/Lady3.png", title: "Trench Coat", price: 500, numItems: 0 },
    { image: "assets/Ladies/Lady4.png", title: "Two Piece Short Suite", price: 600, numItems: 0 },
    { image: "assets/Ladies/Lady5.png", title: "Two Piece Suit", price: 800, numItems: 0 },
    { image: "assets/Ladies/Lady6.png", title: "Belt Jacket", price: 500, numItems: 0 },
    { image: "assets/Ladies/Lady7.png", title: "Neck Blouse", price: 250, numItems: 0 },
    { image: "assets/Ladies/Lady8.png", title: "Blazer", price: 450, numItems: 0 },
    { image: "assets/Ladies/Lady9.png", title: "Baggy Trouser", price: 150, numItems: 0 },
    { image: "assets/Ladies/Lady10.png", title: "Mom Jean", price: 250, numItems: 0 },
    { image: "assets/Ladies/Lady11.png", title: "Red Pocker Dot Dress", price: 350, numItems: 0 }
  ]

  add: Array<{ image: string, title: string, price: number, numItems: number }> = [];

  constructor(private router: Router) { }

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

    if (item.title == "Summer Blouse" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Sleeveless Cardigan" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Trench Coat" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Two Piece Short Suite" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Two Piece Suit" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Belt Jacket" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Neck Blouse" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Blazer" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Baggy Trouser" && item.numItems > 0) {
      this.add.push(item);

    }

    if (item.title == "Mom Jean" && item.numItems > 0) {
      this.add.push(item);
    }

    if (item.title == "Red Pocker Dot Dress" && item.numItems > 0) {
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

    if (item.title == "Summer Blouse" && item.numItems >= 0) {

      this.add.splice(idItm, 1);

    }

    if (item.title == "Sleeveless Cardigan" && item.numItems >= 0) {
      this.add.splice(idItm, 1);

    }

    if (item.title == "Trench Coat" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    if (item.title == "Two Piece Short Suite" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }
    if (item.title == "Two Piece Suit" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    if (item.title == "Belt Jacket" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    if (item.title == "Neck Blouse" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    if (item.title == "Blazer" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    if (item.title == "Mom Jean" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    if (item.title == "Baggy Trouser" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    if (item.title == "Red Pocker Dot Dress" && item.numItems >= 0) {
      this.add.splice(idItm, 1);
    }

    console.log(this.add);
    localStorage.setItem('items', JSON.stringify(this.add));



    console.log(this.add);
  }

  logOut(){
    console.log("\n---- Log Out Pressed ----\n");
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}
