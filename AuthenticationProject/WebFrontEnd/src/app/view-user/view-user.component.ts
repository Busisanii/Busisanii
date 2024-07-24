import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../user-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent implements OnInit{
  userId: any;
  users: User ={
    userName: '',
    userEmail: '',
    userPassword: '',
    userPhoneNo: '',
    userId: 0,
    userRole: ''
  }; 
  constructor(private userService: UserDetailService,
    private router: Router, private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    let sub = this.route.params.subscribe(params =>{
      this.userId = params['id'];
     });
     console.log("The Id is: "+ this.userId);
     this.userService.searchUser(this.userId).subscribe(data =>{
      this.users = data;
     })
  }
  
  btnDelete(u: number) {
    if(confirm('Are you sure you want to delete this user')){
      this.userService.deleteUser(u).subscribe((res:any) => {
          alert("User Deleted");
      });
    }
    this.router.navigate(['ViewUser']);
    this.userService.searchUser(this.userId).subscribe(data => {
      this.users = data});
   
  }
  
  btnUpdate(userId: any) {
    this.router.navigate(['/Update', userId]);
  }

}
