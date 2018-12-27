import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router} from '@angular/router';
import { User } from '../User'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userList: User[]
  public user: User
  constructor(public loginService: LoginService,public router: Router) { 
   // if(loginService.loginStatus != 1){
    //  router.navigateByUrl('/login')
    //}
    this.user = new User()
    this.userList = this.loginService.userList
  }

  ngOnInit(){
  }
  saveData(){
    this.loginService.userList.push(this.user);
    this.user =new User()
    //console.log(this.userList)
  }
  fetchData(){
    
  }
}
