import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserDetailService } from '../user-detail.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  userID: number;

  UsersD: User[];


  constructor(private userService: UserDetailService,
    private router: Router, private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.userService.getUserList().subscribe(data => {
    this.UsersD = data});
  }

 

  btnDelete() {
    this.userService.deleteUser(this.userID).subscribe(() => {
      if(User == null){
        this.UsersD = this.UsersD.filter(user => user.userId !== this.userID);
        console.log('User deleted successfully');
      }
    },  error => {
      console.error('Error deleting user', error);
    });
  }
  
  btnUpdate() {
    this.router.navigate(['/Update']);
  }
  
}
