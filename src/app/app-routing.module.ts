 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ DisplayUserComponent } from './display-user/display-user.component';
import{ AddUserComponent} from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

import { UserVeiwComponent } from './user-veiw/user-veiw.component';
const routes: Routes = [
  {path: 'users', component: DisplayUserComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: '', redirectTo:'users',pathMatch: 'full'},
  {path: 'update-user/:id', component: UpdateUserComponent},
  {path: 'user-veiw/:id', component: UserVeiwComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
