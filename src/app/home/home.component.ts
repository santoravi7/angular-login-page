import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { USER } from '../user-credentials';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User[];
  constructor() { }

  ngOnInit() {
    getUser();
  }
  getUser():void{
    this.notebookService.getNotebooks()
        .subscribe(notes => this.notebooks = notes);
  }

}