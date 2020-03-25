import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { USER } from '../user-credentials';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User[];
  constructor( private route: ActivatedRoute,private usersService:UsersService) { }

  ngOnInit() {
   this.getUser();
  }
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id)
      .subscribe(
        notebook => this.user = notebook
      );
  } 

}