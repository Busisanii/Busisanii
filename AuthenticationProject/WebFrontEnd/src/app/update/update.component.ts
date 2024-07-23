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
  userId: any;
  user: User ={
    userName: '',
    userEmail: '',
    userPassword: '',
    userPhoneNo: '',
    userId: 0,
  }; 
  
  constructor(private userService: UserDetailService,
    private router: Router, private route: ActivatedRoute,
   
  ){}
  ngOnInit(): void {
   let sub = this.route.params.subscribe(params =>{
    this.userId = params['id'];
   });
   //console.log("The Id is: "+ this.userId);
   this.userService.searchUser(this.userId).subscribe(data =>{
    this.user = data;
   })
  }
   
btnSubmit() {
    this.userService.updateUser(this.user).subscribe(data => {
    });
    this.router.navigateByUrl('Home');
  }
}

