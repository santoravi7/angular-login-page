import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { Newuser } from '../newuser'
import { USER } from '../user-credentials';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  username:string;
  password:string;
  fullname:string;
  email:string;
  credentials :User[]=USER;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  validate_form(choice : string) : void {
      var userName = (<HTMLInputElement>document.getElementById("user-name")).value;
      var pass = (<HTMLInputElement>document.getElementById("password")).value;
      var fName = (<HTMLInputElement>document.getElementById("full-name")).value;
      var emailVal = (<HTMLInputElement>document.getElementById("email")).value;
      console.log("this username == "+this.userName);
      if(choice == 'username'){
        this.username=""
        if(userName.length < 1)
        {
          this.username = "Username cannot be null";
        }
      
      }
      else if(choice == 'password'){
        this.password=""
        if(pass.length < 1)
        {
          this.password += "Password cannot be null";
        }
        
      }
      else if(choice == 'email'){
        this.email=""
        if(emailVal.length<1){
          this.email+="Email cannot be null"
        }
      }
      else if(choice == 'fullname'){
        this.fullname=""
        if(fName.length<1){
          this.fullname+="Fullname cannot be null"
        }
      }
      else if(choice == 'register'){
        if(userName==""||emailVal==""||fName==""||pass==""){
              this.username = "Username cannot be null";
        }
        else{
            let userIns = new Newuser(emailVal,fName,userName,pass);
              console.log("register Sucessful == "+userIns);
              this.credentials.push({
                username:userName, 
                password:pass
              });
                this.validate=true
                console.log("register Sucessful == "+this.credentials);
                this.router.navigate(['/']);
              
        }
        
      }
  }
  register(){

  }
}