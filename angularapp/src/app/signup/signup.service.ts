import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8090/api/v1/user";

  signupSave(signupData : any){
    return this.http.post<any>(this.url, signupData);
  }

}

