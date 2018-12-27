import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router} from '@angular/router';
import { User} from '../User';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
   user: User
   signFlag: boolean=false
  // userList: any
  constructor(public loginservice: LoginService, public router: Router) { 
     this.user = new User()
  }
 
  ngOnInit() {
  }
  
  signUp(signupForm){
    this.signFlag=true
    this.loginservice.userList.push(this.user)
    console.log(this.loginservice.userList)
    setTimeout(()=>{
        //this.signFlag=false
        this.router.navigateByUrl('/login')
      }, 2000);
    this.user = new User()
    signupForm.form.markAsPristine();
}
}
