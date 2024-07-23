import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailService } from '../user-detail.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})

export class LogoutComponent implements OnInit{
  constructor(private router: Router, private Userservice: UserDetailService){}
  
  ngOnInit(): void {
    this.Userservice.logout();
    this.router.navigate(['/LogIn']);
  }

}
