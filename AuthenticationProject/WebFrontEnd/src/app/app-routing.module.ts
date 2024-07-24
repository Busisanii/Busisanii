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
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [  
  { path: '', redirectTo: '/LogIn', pathMatch: 'full' },
  { path: 'LogIn', component: LogInComponent },
  //{ path: '', component: DashboardComponent, children: [
    { path: 'Home', component: HomeComponent },
    { path: 'Register', component: RegisterComponent },
    { path: 'Contact', component: ContactComponent },
    { path: 'Update/:id', component: UpdateComponent },
    {path: 'Request', component: RequestComponent},
    {path: 'Notification', component: NotificationComponent},
    {path: 'ViewUser/:id', component: ViewUserComponent},
    {path: 'Logout', component: LogoutComponent},
    {path: 'Dashboard', component: DashboardComponent}
 // ] },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppRoutingModule { }