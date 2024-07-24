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



onSearch(userId: any) {
  let sub = this.route.params.subscribe(params =>{
    this.user.userId = params['id'];
   });
   //console.log("The Id is: "+ userId);
   if(this.user.userId == null && undefined && this.user.userId == 0){
    console.error(this.user.userId +" does not exist.");
    
   }
   this.userService.searchUser(userId).subscribe(data =>{
    this.user = data;
   })
  this.router.navigate(['/ViewUser', userId]);
}

}
