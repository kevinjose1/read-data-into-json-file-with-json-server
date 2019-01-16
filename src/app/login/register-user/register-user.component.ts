import { Component, OnInit } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http'
//import { from } from 'rxjs';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  Isregister : boolean= false;
  sucessmessage : string = "Registered SuccessFully";
registerdobj : object ={};
  constructor(  private http : Http) 
  { }
  register(data)
  {
    this.registerdobj = 
    {
       "Name": data.Name ,
       "Phonenumber" : data.Phonenumber,
       "Email" : data.Email,
       "Password":data.Password,
       "UserName" :data.UserName
    }
    this.http.post("http://localhost:3600/register" ,this.registerdobj)
    .subscribe((res:Response) => {
      this.Isregister =true;
    })
     
    
  }
  ngOnInit() {
  }

}
