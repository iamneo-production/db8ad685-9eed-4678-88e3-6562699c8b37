import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import {FormsModule} from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { UserVeiwComponent } from './user-veiw/user-veiw.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    UserVeiwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
