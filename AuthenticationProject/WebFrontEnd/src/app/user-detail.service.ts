import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
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

  createUser(newUser: User): Observable<User> {
    return this.http.post<User>(`${this.baseURL}/registration`, newUser)
  }

  searchUser(userID: number): Observable<any>{
    return this.http.get<any>(`${this.baseURL}/UserDetails/${userID}`);
  }

  deleteUser(userId: number): Observable<any>{
   // if (userId == null) {
   // var uId  = this.http.get<User>(userId)
   // }
    return this.http.delete<void>(`${this.baseURL}/UserDetails/${userId}`);
  }

  updateUser(userId: number): Observable<User> {
    const url = `${this.baseURL}/UserDetails/${userId}`;
    return this.http.put<User>(url, userId);
  }
    
}
