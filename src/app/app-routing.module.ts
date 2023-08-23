import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UpdateEmployeeComponent } from './pages/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './pages/delete-employee/delete-employee.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full',
  },
{
  path:'registration',
  component:RegistrationComponent,
  pathMatch:'full',
},
{
  path:'update',
  component:UpdateEmployeeComponent,
  pathMatch:'full',
},
{
  path:'delete',
  component:DeleteEmployeeComponent,
  pathMatch:'full',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
