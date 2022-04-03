import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//Angular Import by npm
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FlexLayoutModule } from '@angular/flex-layout';
//Anugular Material Import
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Angular Component Import
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FooterHomepageComponent } from './footer-homepage/footer-homepage.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserUpdateComponent } from './user-update/user-update.component';

;



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NotFoundComponent,
    HomepageComponent,
    UserNavbarComponent,

    AdminDashboardComponent,
    FooterHomepageComponent,
    ProductAddComponent,
    ProductDisplayComponent,
    ProductUpdateComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    CheckoutComponent,
    OrderHistoryComponent,
    UserDisplayComponent,
    UserUpdateComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }