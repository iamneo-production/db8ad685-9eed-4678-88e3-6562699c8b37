import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterHomepageComponent } from './footer-homepage/footer-homepage.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.service';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    UserDisplayComponent,
    UserNavbarComponent,
    UserUpdateComponent,
    HomepageComponent,
    FooterHomepageComponent,
    AdminDashboardComponent,
    SignupComponent,
    LoginComponent,
    ProductDisplayComponent,
    ProductAddComponent,
    ProductDetailsComponent,
    ProductUpdateComponent,
    CartDetailsComponent,
    CheckoutComponent,
    OrderHistoryComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
