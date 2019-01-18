import { Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router'
import{HttpClient} from '@angular/common/http'
import { Response, Http ,Headers} from '@angular/http';
import { NgForm , FormBuilder,FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import {Ilogin} from '../../ilogin';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
   //Setting username and password
  model: Ilogin = { userid: "admin", password: "admin123" };
     //Form Validation starts
  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,private router: Router, public authService: AuthService) { }

  ngOnInit() {

            //Checking for validation
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
             //Calling logout condition in authservice file
    this.authService.logout();
  }

  get f() { return this.loginForm.controls; }

                 //Login Starts
  login() {
                 //Invalid Form
    if (this.loginForm.invalid) {
        return;
    }
    else{
               //check the code before uploading
     if(this.f.userid.value == this.model.userid && this.f.password.value == this.model.password){
          
        console.log("Login successful");
               //this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.userid.value);

        // If Login True ,then Jump into Post Page
        this.router.navigate(['/Post']);
      }
      else{
              //Message to display if wrong condition
      this.message = "Please check your UserName and password";
      }
    }    
}

}