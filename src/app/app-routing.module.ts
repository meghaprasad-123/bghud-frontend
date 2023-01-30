import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'courses',component:CoursesComponent},
  {path:'registration',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
