import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';


const appRoutes:Routes =[
  {path :'', component :LoginComponent},
  {path :'home', component :HomeComponent},
  {path :'signup', component :SignupComponent}
]


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(
      appRoutes,{
        enableTracing:true
      }
    ) ],
  declarations: [ AppComponent, LoginComponent, HomeComponent, SignupComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
