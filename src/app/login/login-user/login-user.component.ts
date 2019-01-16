import { Component, OnInit } from '@angular/core';
import {Route} from '@angular/router'
import { from } from 'rxjs';
import{AppService} from '../../app.service';
import { Response, Http ,Headers  } from '@angular/http';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  sucessfullylogin :boolean=false;
  id: number
  sucessmessage: string = "Success";
  productObj:object = {};
  constructor( private http : Http) { }
  login = function(data)
  {
    this.productObj = {
      "Name": data.Name,
      "Psw": data.Psw
    }
  

  this.http.post("http://localhost:3400/login", this.productObj)
  .subscribe((res:Response) => {
    this.sucessfullylogin= true;
    })
  }

  ngOnInit() {
  }

}