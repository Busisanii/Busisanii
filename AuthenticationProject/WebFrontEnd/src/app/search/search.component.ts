import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserDetailService } from '../user-detail.service';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent{
  userId: any;
  user: User ={
    userName: '',
    userEmail: '',
    userPassword: '',
    userPhoneNo: '',
    userId: 0,
  }; 
  constructor(
    private route: ActivatedRoute,
    private userService: UserDetailService,
    private router: Router
  ) { }



onSearch(userId: any) {
  let sub = this.route.params.subscribe(params =>{
    this.userId = params['id'];
   });
   //console.log("The Id is: "+ userId);
   this.userService.searchUser(userId).subscribe(data =>{
    this.user = data;
   })
  this.router.navigate(['/ViewUser', userId]);
}

}
