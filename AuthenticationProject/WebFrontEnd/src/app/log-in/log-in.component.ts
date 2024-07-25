import { Component } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailService } from '../user-detail.service';
import { roleGuard } from '../role.guard';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
 userObj: User;
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
        this.user.userEmail 
        this.user.userPassword 
       
      if (success) {
        this.router.navigateByUrl('/Home');
        this.router.navigateByUrl('/Request');
      
      } else {
        this.router.navigateByUrl('/LogIn');
      }
    }
  );
}

}
