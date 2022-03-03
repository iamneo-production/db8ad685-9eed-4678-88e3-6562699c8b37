import { Component, OnInit } from '@angular/core';
import {User} from '../Services/user'
import{ UserService} from '../Services/user.service'
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  user: User[] = [];
  username: any
  constructor(private userService:UserService,
    private router: Router) { }

  ngOnInit(): void {
this.getUser();

 }
 
 private getUser(){
   this.userService.getUserList().subscribe(data => {
     this.user=data;
   }); 
 }
 Search(){
   if(this.username==""){
     this.ngOnInit();
 }
 else{
   this.user=this.user.filter(data =>{
     return data.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
   });
  }
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

