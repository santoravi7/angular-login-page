import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { USER } from '../user-credentials';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User[];
  constructor(private usersService:UsersService) { }

  ngOnInit() {
   //this.getUser();
  }


}