import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import{AuthService} from '../auth.service'
import{Router} from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
             //setting postobj
postobj :object={}
             //checking isposted
isposted :boolean = false;
  constructor(private http : Http ,private authService : AuthService , private router: Router) { }
            //calling id as string
  id: string;
            //invoking method
  postform(data)
  {
    this.postobj=
    {
      "Name" :data.Name,
      "Message": data.post 
    }
         //Getting data from message file
    this.http.post("http://localhost:3000/message" ,this.postobj)
    .subscribe((res:Response) => {
        //Checks if correctly posted or not
      this.isposted =true;
    })
     
  }
  ngOnInit() {
    this.id = localStorage.getItem('token');
  }
         //Logout Function starts
  logout(): void {
    console.log("Logout");

      //Calling Logoutmethod in Authservice
    this.authService.logout();
    // Navigate to login
    this.router.navigate(['/Login']);
  }
}
