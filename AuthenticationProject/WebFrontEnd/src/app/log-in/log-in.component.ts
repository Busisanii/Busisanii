import { Component } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailService } from '../user-detail.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  userEmail: string;
  userPassword: string;
  user: User ={
    userName: '',
    userEmail: '',
    userPassword: '',
    userPhoneNo: '',
    userId: 0,
    userRole: ''
  };
 
  constructor(
    private route: ActivatedRoute,
    private userService: UserDetailService,
    private router: Router
  ) { }
  
btnSignIn() {
  this.userService.UserLogin(this.user).subscribe(
    (success) => {
      this.user.userEmail;
      this.user.userPassword;
      if (success) {
        this.router.navigateByUrl('/Home');
      } else {
        this.router.navigateByUrl('/LogIn');
      }
    }
  );
}

}
