import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'Header',
    component: HeaderComponent,
  },
  
    {
        path: 'LogIn',
        component: LogInComponent,
    },
    
  {
    path: 'register',
    component: RegisterComponent,
  },

 
];
