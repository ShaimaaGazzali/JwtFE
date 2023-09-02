import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserManagementComponent } from './Components/all-user-management/all-user-management.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserManagementComponent } from './Components/user-management/user-management.component';
import { AuthGuardService } from './guards/authGuard.service';
import { DepartmentComponent } from './Components/department/department.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'userManagement', component: UserManagementComponent, canActivate: [AuthGuardService]},
  {path: 'allUserManagement', component: AllUserManagementComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
