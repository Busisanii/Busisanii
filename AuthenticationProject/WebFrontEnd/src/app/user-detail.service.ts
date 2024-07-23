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
  
  LoginUser(userEmail: string, password: string): Observable<boolean> {
    const url = `${this.baseURL}/login`;
    console.log("User email is "+userEmail + " Password: " + password); //Debug to see output
    return this.http.post<{ token: string }>(url, {userEmail, password })
      .pipe(
        map(response => {
          localStorage.setItem('token', response.token);
          return true;
        }),
        catchError(error => {
          console.error(error);
          return of(false);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
