import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, 
  MaybeAsync, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserDetailService } from './user-detail.service';

@Injectable({
  providedIn: 'root'
})
export class roleGuard implements CanActivate {

    constructor(private authService: UserDetailService, private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean| UrlTree| MaybeAsync<GuardResult> {
      const expectedRoles = route.data['expectedRoles'];
      const userRoles = this.authService.getUserRoles();
  
      if (this.authService.isLoggedIn() && expectedRoles.some((role: string) => userRoles.includes(role))) {
        return true;
      } else {
        return this.router.createUrlTree(['/LogIn']);
      }
  }
  

}
