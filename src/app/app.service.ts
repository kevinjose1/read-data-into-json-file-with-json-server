import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import {Router} from '@angular/router';
import 'rxjs/Rx';
@Injectable()
export class AppService 
{
    constructor(private http : Http)
    {
        //no data
    }
storeServers(login : any[])
{
return this.http.put( '../assets/message.json' , JSON.stringify(login));
}

}