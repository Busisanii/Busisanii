import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';

const routes: Routes = [  
   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'LogIn', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppRoutingModule { }
