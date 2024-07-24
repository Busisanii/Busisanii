import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  private baseURL ="http://localhost:8080/user";

  constructor(private http: HttpClient) { }
  
    //100% working
  getUserList(): Observable<User[]>{
   return this.http.get<User[]>(`${this.baseURL}/UserDetails`);
  }
  //100% working
  createUser(newUser: User): Observable<User> {
    return this.http.post<User>(`${this.baseURL}/registration`, newUser)
  }

  searchUser(userId: number): Observable<any>{
    const url = `${this.baseURL}/UserDetails/${userId}`;
    return this.http.get<User>(url);
  }

  //100% working
  deleteUser(userId: number): Observable<User>{
    const url = `${this.baseURL}/UserDetails/${userId}`;
    return this.http.delete<User>(url);
  }

  //100% working
  updateUser(user: User): Observable<User> {
    const url = `${this.baseURL}/UserDetails/${user.userId}`;
    return this.http.put<User>(url, user);
  }
  
  //UserLogin(user: User): Observable<User> {
   // return this.http.post<User>(`${this.baseURL}/login`, user)
  //}


 logout(): void {
  localStorage.removeItem('token');
  localStorage.removeItem('roles');
}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserRoles(): string[] {
    const roles = localStorage.getItem('roles');
    return roles ? JSON.parse(roles) : [];
  }

  UserLogin(user: User): Observable<User> {
  
debugger;
    if (user.userEmail && user.userPassword && user.userRole == 'ADMIN' ) {
      localStorage.setItem('token', 'admin-token');
   
      return this.http.post<User>(`${this.baseURL}/login`, user)

    } else if (user.userEmail  && user.userPassword && user.userRole == 'USER') {
      localStorage.setItem('token', 'user-token');
  
      return this.http.post<User>(`${this.baseURL}/login`, user)
    }else{
     return this.http.post<User>(`${this.baseURL}/login`, user)
    }
   
  }
  
}
