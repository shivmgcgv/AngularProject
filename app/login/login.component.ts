import { LoginService } from '../login.service';
import { Component, OnInit } from '@angular/core';
import { User} from './../User';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User
  
  constructor(public loginService: LoginService,public router: Router) { 
   this.user= new User();
  }

  ngOnInit(){
    
  }

  login(myForm){
    this.loginService.login(this.user);
    if(this.loginService.loginStatus == 1){
      setTimeout(()=>{
        this.router.navigateByUrl('/home')
      }, 1200);
    }
    this.user = new User()
    myForm.form.markAsPristine();
  }
  
}
