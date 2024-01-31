import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DialogBodyComponent } from './components/dialog-body/dialog-body.component';
import { HomeComponent } from './components/home/home.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { StatusComponent } from './components/status/status.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {

    path:'', redirectTo:'home', pathMatch: 'full'
  } ,
   

  {

     path: 'login-page' , component: LoginPageComponent
  },
    
  {
    path: 'home' , component: HomeComponent
  },
  {
    path: 'tickets' , component: TicketsComponent
  },
  {
    path: 'status' , component: StatusComponent
  },
  {
    path: 'register' , component: RegisterComponent
  },

    
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
