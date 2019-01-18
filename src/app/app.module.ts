import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule ,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { RegisterUserComponent } from './login/register-user/register-user.component';
import { AuthGuard } from './auth.guard';
import { PostingComponent } from './posting/posting.component';





@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule,
   HttpClientModule,
   HttpModule
    
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    LoginComponent,
    NavbarComponent,
    LoginUserComponent,
    RegisterUserComponent,
    PostingComponent,
   
  ],
 
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
