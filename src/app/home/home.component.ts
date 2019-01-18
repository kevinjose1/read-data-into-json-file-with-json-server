import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
 {
username :string;
  constructor(private http : HttpClient) { }
                  //store as array userdata
  userdata :string[] 
  ngOnInit() {
                 //get data from message.json
    this.http.get('http://localhost:3000/message') 
    .subscribe(      
                 //subscribe to data
      data => {
                  // fill the array
        this.userdata = data as string [];	 
      
      }
    )
   
  }

}
