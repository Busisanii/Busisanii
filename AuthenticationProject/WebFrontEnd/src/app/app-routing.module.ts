import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateComponent } from './update/update.component';
import { RequestComponent } from './request/request.component';
import { NotificationComponent } from './notification/notification.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [  
   { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'LogIn', component: LogInComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Update/:id', component: UpdateComponent },
  {path: 'Request', component: RequestComponent},
  {path: 'Notification', component: NotificationComponent},
  {path: 'ViewUser/:id', component: ViewUserComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppRoutingModule { }