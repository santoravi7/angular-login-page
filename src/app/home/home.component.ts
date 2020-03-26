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
        user => this.user = user
      );
  } 
  userPost
   onSelectFile(event,user) {
    this.userPost = user;
    console.log("user object -- "+this.userPost.posts[0].name);
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                 
                   this.userPost.posts.push({
                     name:"ScratchedStories",
                      profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIi3vEDnvue29P8-GSDrcxFn-pGNcSjoRQomgvqvxPqBB9tIwL",
                      caption:"My First Post",
                      img:event.target.result,
                      likes:"0",
                      comments:[{
                        comment:"this is first comment"
                      }],
                      savepost: false,
                      posttime: "0",
                      liked: false
                   }
                     
                   ); 
                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
    this.usersService.updateUser(this.userPost).subscribe(); 
  }

}