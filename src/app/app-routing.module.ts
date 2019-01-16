import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';//Use for Routing Purpose
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login/login-user/login-user.component'
import { RegisterUserComponent } from './login/register-user/register-user.component';
const appRoutes :Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path : 'Home' , component:HomeComponent},
    { path : 'Help' , component:HelpComponent},
    { path : 'Login' , component:LoginComponent, //Declaring Child Components
    children : [
        {
            path:'Loginuser',
            component: LoginUserComponent   //Child Component
        },
        {
            path :'registeruser',
            component:RegisterUserComponent  //Child Component
        }
    ]
}


    

    ];
@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
 exports : [RouterModule]
})
export class AppRoutingModule 
{

}