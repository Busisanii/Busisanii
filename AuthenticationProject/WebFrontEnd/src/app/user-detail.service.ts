import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  private baseURL ="http://localhost:8080/user";

  constructor(private http: HttpClient) { }
  
  getUserList(): Observable<User[]>{
   return this.http.get<User[]>(`${this.baseURL}/UserDetails`);
  }

}
