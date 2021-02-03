import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './page/landing/landing.component';
import { ShopComponent } from './page/shop/shop.component';
import { ShopladiesComponent } from './page/shopladies/shopladies.component';
import { ShopmenComponent } from './page/shopmen/shopmen.component';
import { CheckoutComponent } from './page/profile/checkout/ckeckout.component';
import { HistoryComponent } from './page/profile/history/history.component';
import { CustomerComponent } from './page/profile/customer/customer.component';
import { LoginComponent } from './page/authentication/login/login.component';
import { UserRegisterComponent } from './page/register/user-register/user-register.component';
import { AdminloginComponent} from './page/adminlogin/adminlogin.component';
import {AdminviewComponent} from './page/adminview/adminview.component';
import { AuthGuard } from './page/auth/auth.guard';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "shop", component: ShopComponent, canActivate: [AuthGuard] },
  { path: "shopladies", component: ShopladiesComponent, canActivate: [AuthGuard] },
  { path: "shopmen", component: ShopmenComponent, canActivate: [AuthGuard] },
  { path: "checkout", component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: "history", component: HistoryComponent, canActivate: [AuthGuard] },
  { path: "customer", component: CustomerComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: UserRegisterComponent },
  { path: "adminlogin", component: AdminloginComponent },
  { path: "adminview", component: AdminviewComponent},
  { path: 'landing', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
