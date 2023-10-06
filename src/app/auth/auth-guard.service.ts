import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  userData: any = [];

  constructor(private _loginService: LoginService) { }

  /**
   * implement canActive method from CanActivate interface
   * @param route 
   * @param state 
   * @returns 
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('ActivatedRouteSnapshot', route);
    console.log('RouterStateSnapshot', state);
    const userParams = route.params['username'];
    const isUserValid = this.getUserData(userParams);
    if (isUserValid) {
      return true;
    }
    return false;
  }

  /**
   * check if the user is valid or not
   * @param userParams pass the params as argument
   * @returns 
   */
  getUserData(userParams: any) {
    this._loginService.getUserLoginDetails()
      .subscribe((users: any) => {
        this.userData = users;
      });
      if (this.userData.length > 0) {
        const uniqueUser = this.userData.filter((data: any) => {
          if (data.username === userParams) {
            return data;
          } 
        });
        if (uniqueUser.length > 0) {
          return true;
        }
      }
    return false;
  }

}
