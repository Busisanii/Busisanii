import { Component } from '@angular/core';
import { UserDetailService } from '../user-detail.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{

  user: User ={
    userName: '',
    userEmail: '',
    userPassword: '',
    userPhoneNo: '',
    userId: 0,
    userRole: ''
  }; 
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private userService: UserDetailService, 
    private router: Router) {}

btnSignUp() {
  this.userService.createUser(this.user).subscribe(
    (response) => {
      if (response) {
       this.successMessage = 'User created successfully:';
       this.errorMessage ='';
        this.router.navigateByUrl('/LogIn', { skipLocationChange: true }).then(() => {
        });
        this.resetForm();
        this.router.navigate(['/LogIn']);
        this.errorMessage = 'User created successfully:';
      } 
    }, 
  );
}
resetForm() {
  this.user ={
    userId: 0,
    userName: '',
    userEmail: '',
    userPassword: '',
    userPhoneNo: '',
    userRole: '',
  }; 
}

}
