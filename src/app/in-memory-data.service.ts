import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../user';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users =[
      {
        id:1,
        username :"santo" , 
        password : "santo",
        posts : [{
          caption:"My First Post",
          img:"https://i.pinimg.com/originals/4c/28/3b/4c283b0fb76da7a57406ae25bebfa602.jpg",
          likes:"251",
          comments:[{
            comment:"this is first comment"
          }],
          savepost: false,
          posttime: "5",
          
        }] 
      },
      {
        id:2,
        username :"1234" , 
        password : "user1",
        posts: [{

        }]
      }
    ];
    return (users);
  }
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(users => users.id)) + 1 : 11;
  }
}