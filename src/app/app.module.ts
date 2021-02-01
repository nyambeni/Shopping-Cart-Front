import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './page/landing/landing.component';
import { CheckoutComponent } from './page/profile/checkout/ckeckout.component';
import { CustomerComponent } from './page/profile/customer/customer.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ShopComponent } from './page/shop/shop.component';
import { ShopladiesComponent } from './page/shopladies/shopladies.component';
import { ShopmenComponent } from './page/shopmen/shopmen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './page/authentication/login/login.component';
import { UserRegisterComponent } from './page/register/user-register/user-register.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule} from  '@angular/common/http';

import { from } from 'rxjs';

import { MatSliderModule } from '@angular/material/slider';
import { AdminloginComponent } from './page/adminlogin/adminlogin.component';
import { AdminviewComponent } from './page/adminview/adminview.component';

import { AuthGuard } from './page/auth/auth.guard'; 
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ShopComponent,
    ShopladiesComponent,
    ShopmenComponent,
    CheckoutComponent,
    UserRegisterComponent,
    LoginComponent,
    AdminloginComponent,
    AdminviewComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [], //Auth AuthGuard
  bootstrap: [AppComponent]
})
export class AppModule { }
