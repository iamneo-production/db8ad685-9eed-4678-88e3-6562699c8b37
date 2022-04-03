import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL="http://localhost:8090/api/v1/users";
  name: any;
  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<User[]>{
   return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
  addUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }
getUserById(id:any):Observable<User>{
  return this.httpClient.get<User>(`${this.baseURL}/${id}`);
}
updateUser(id:any,user: User): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, user);
}
deleteUser(id: any): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}