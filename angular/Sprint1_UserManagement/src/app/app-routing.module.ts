 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ DisplayUserComponent } from './display-user/display-user.component';

import { UpdateUserComponent } from './update-user/update-user.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';


//import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path: 'user', component: DisplayUserComponent},
 
 // {path: '', redirectTo:'user',pathMatch: 'full'},
  {path: 'update-user/:id', component: UpdateUserComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path:"",redirectTo:'/login',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"**",component:NotFoundComponent}
  //{path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
