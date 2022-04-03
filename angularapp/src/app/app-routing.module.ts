import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';


import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserUpdateComponent } from './user-update/user-update.component';



const routes: Routes = [
  {path:"",redirectTo:'/login',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomepageComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"cart",component:CartDetailsComponent},
  {path: 'dashboard', component:AdminDashboardComponent},
  {path: 'display-product', component:ProductDisplayComponent},
  {path: 'add-product', component:ProductAddComponent},
  {path: 'update-product/:id', component:ProductUpdateComponent},
  {path: 'details-product/:id', component:ProductDetailsComponent},
  {path:'user', component:UserDisplayComponent},
  {path:'update-user/:id',component:UserUpdateComponent},
  {path:'orders',component:OrderHistoryComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }