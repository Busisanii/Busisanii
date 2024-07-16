import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [  
   { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'LogIn', component: LogInComponent },
  { path: 'Contact', component: ContactComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppRoutingModule { }