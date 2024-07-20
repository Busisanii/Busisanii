import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailService } from './user-detail.service';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateComponent } from './update/update.component';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LogInComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SearchComponent,
    ContactComponent,
    UpdateComponent,
    ViewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [provideHttpClient(withInterceptorsFromDi()), UserDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
