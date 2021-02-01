import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.scss']
})
export class AdminviewComponent implements OnInit {

  users: any = [];

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registrationService.getAllUser().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }
  
  deleteUser(id: number){
    this.registrationService.deleteUser(id).subscribe();
    this.users = this.users.filter((u: any) => u.customer_id !== id);
  }


}
