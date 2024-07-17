import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserDetailService } from '../user-detail.service';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  users: User[];
  constructor(
    private route: ActivatedRoute,
    private userService: UserDetailService,
    private router: Router
  ) { }

  getUserById(id: number): any {
    return this.users.find(user => user.userId === id);
  }

onSearch() {
  this.route.params.subscribe(params => {
    const userId = params['UserId'];
    if (!userId) {
      this.userService.searchUser(this.getUserById(userId)).subscribe(user => {
        this.router.navigate(['/Update']);
      }, error => {
        console.error('Error fetching user', error);
      });
    } 
  });
}

}
