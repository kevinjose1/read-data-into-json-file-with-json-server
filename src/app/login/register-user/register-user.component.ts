import { Component, OnInit } from '@angular/core';
import { Http,Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
//import { from } from 'rxjs';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit 
{
     //Check Whether Register or Not
  Isregister : boolean= false;

     //Display Success message
  sucessmessage : string = "Registered SuccessFully";

     //Read data 
registerdobj : object ={};
  constructor(  private http : Http , private htttp:HttpClient ) 
  { }
   //Inovking method
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
              //Getting Data from Object
    this.http.post("http://localhost:3600/register" ,this.registerdobj)
    .subscribe((res:Response) => {
      //Used to display reponse in template
      this.Isregister =true;
    })
     
    
  }
  ngOnInit() {
  }

}
