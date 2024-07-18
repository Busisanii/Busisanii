import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserDetailService } from '../user-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { async } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  UsersD: User[] = [];


  constructor(private userService: UserDetailService,
    private router: Router, private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.userService.getUserList().subscribe(data => {
    this.UsersD = data});
  }



  btnDelete(u: number) {
    if(confirm('Are you sure you want to delete this user')){
      this.userService.deleteUser(u).subscribe((res:any) => {
          alert("User Deleted");
      });
    }
    this.router.navigate(['Home']);
   
  }
  
  btnUpdate(userId: any) {
    this.router.navigate(['/Update', userId]);
  }
  
}
