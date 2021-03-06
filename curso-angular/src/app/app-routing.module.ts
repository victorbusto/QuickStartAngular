import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component'; 
import { CarComponent } from './car/car.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'car', component: CarComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contact/:page', component: ContactComponent},
  {path: 'skill', component: SkillComponent},
  {path: '**', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
