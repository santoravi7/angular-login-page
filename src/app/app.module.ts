import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UsersService } from './users.service';
import { MessageComponent } from './message/message.component';
import { MesageService } from './mesage.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
    
  declarations: [ 
    AppComponent, 
    LoginComponent, 
    HomeComponent, 
    SignupComponent, 
    MessageComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers: [UsersService, MesageService, InMemoryDataService]
})
export class AppModule { }
