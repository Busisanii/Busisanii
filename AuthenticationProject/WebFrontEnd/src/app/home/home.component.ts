import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserDetailService } from '../user-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
delete1() {
throw new Error('Method not implemented.');
}
update() {
throw new Error('Method not implemented.');
}
  UsersD: User[];
  
  constructor(private userService: UserDetailService){}

  ngOnInit(): void {
    this.userService.getUserList().subscribe(data => {
      this.UsersD = data;});
  }
}
