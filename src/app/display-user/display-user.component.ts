import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import{ UserService} from '../user.service'
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  users: User[] = [];
  name: any
  constructor(private userService:UserService,
    private router: Router) { }

  ngOnInit(): void {
this.getUser();
 }
 
 private getUser(){
   this.userService.getUserList().subscribe(data => {
     this.users=data;
   }); 
 }
 Search(){
   if(this.name==""){
     this.ngOnInit();
 }
 else{
   this.users=this.users.filter(data =>{
     return data.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
   });
  }
}
veiwUser(id: any){
  this.router.navigate(['user-veiw', id]);
}
 updateUser(id: any){
   this.router.navigate(['update-user', id]);
 }
 deleteUser(id: any){
  this.userService.deleteUser(id).subscribe( data => {
    console.log(data);
    this.getUser();
 })
  }
}

