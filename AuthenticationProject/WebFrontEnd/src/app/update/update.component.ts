import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserDetailService } from '../user-detail.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{
  user: User = {
    userName: '',
    userEmail: '',
    userPassword: '',
    userPhoneNo: '',
    userId: 0
  };
 
  constructor(private userService: UserDetailService,
    private router: Router, private route: ActivatedRoute,
   
  ){}
  ngOnInit(): void {
    this.userService.searchUser(this.user.userId).subscribe(data => {
      this.user = data;});
  }
   
btnSubmit() {
  
    this.userService.updateUser(this.user.userId).subscribe(() => {
      this.router.navigate(['/user', this.user.userEmail]
      );
    });
  }
}

