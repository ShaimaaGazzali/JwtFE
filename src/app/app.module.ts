import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { UserManagementComponent } from './Components/user-management/user-management.component';
import { AllUserManagementComponent } from './Components/all-user-management/all-user-management.component';
import { DepartmentComponent } from './Components/department/department.component';
//import {NgToastModule} from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    DepartmentComponent,
    UserManagementComponent,
    AllUserManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgToastModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
