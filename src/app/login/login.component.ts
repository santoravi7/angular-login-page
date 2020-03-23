import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { USER } from '../user-credentials';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     username:string;
   password:string;
  credentials :User[]=USER;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  validate_form(choice : string) : void {

  
   var userName = (<HTMLInputElement>document.getElementById("user-name")).value;
   var pass = (<HTMLInputElement>document.getElementById("password")).value;
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
  else if(choice == 'login'){
      
     var flag=0
    for (var value of this.credentials) {
       console.log("credentials -- "+value.username+" --- "+value.password) 
      if((value.username == userName) && (value.password == pass)){
        
        flag=1;

      }
    }
    if(flag==1){
      this.validate = true
      this.router.navigate(['/home']);

    }
    else{
      this.validate = false
    }
		
	}
 }
}