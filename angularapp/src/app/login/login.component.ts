import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { User } from '../user-service/user';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
value:any;
  constructor(private formbuilder: FormBuilder,private loginService: LoginService,private router:Router) {}
  emailRegex = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@" 
            + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";

  errorMessage = {
    email:{
      required : "Email is Required",
      pattern : "Email is Invalid"
    },
    password:{
      required : "Password is Required"
    }
  }

  loginForm = this.formbuilder.group({
    email: ['',[Validators.required,Validators.pattern(this.emailRegex)]],
    password:['',Validators.required],
  }); 

  onSubmit(){
    console.log(this.loginForm.value);

    this.loginService.loginService(this.loginForm.value)
.subscribe(
    response => console.log(this.value='Success!', response),
    error => console.log(this.value='Error!', error)
);
if(this.value==='Success!'){
 this.router.navigate(['/home']);
}
else
{
  console.log('Wrong Credentials')
}
}
   
  
  get email(){
    return this.loginForm.get('email');
  }
  get emailcontrols(){
    return this.loginForm.controls['email'].errors;
  }

  get password(){
    return this.loginForm.get('password');
  }
  get passwordcontrols(){
    return this.loginForm.controls['password'].errors;
  }

  ngOnInit(): void {
  }

}