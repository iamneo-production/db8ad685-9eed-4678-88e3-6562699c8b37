import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8090/api/v1/user";

  loginService(userData : any){
    return this.http.get<any>(this.url, userData);
  }
}
 