import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from '../user'
import { USER } from '../user-credentials';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/observable/timer'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User[]; modalRef: BsModalRef;
  userPost; alive = true;
  constructor( private route: ActivatedRoute,private usersService:UsersService,private modalService: BsModalService) { }

  ngOnInit() {
   this.getUser();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id)
      .subscribe(
        user => this.user = user
      );
  }

  watchAll():void{
      Observable.timer(0,10000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this.usersService.getStories().subscribe(data=> {
          console.log("user stories from service -- "+data);
        })
      });
  }
  
  
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