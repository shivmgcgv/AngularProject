import { Injectable } from '@angular/core';
import { User} from './User';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
  })
export class LoginService {

  public loginStatus: number
  public userList: any[]

  constructor(public router: Router) {
    this.loginStatus = -1
    this.userList = []
    
  }

  public login(user : User) {
    this.loginStatus = (user.uid == 'admin' && user.password == '123') ? 1 : 0 
  }

  public logout(){
    this.loginStatus = -1;
    this.router.navigateByUrl('/login')
  }

}
