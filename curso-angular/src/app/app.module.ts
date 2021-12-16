import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CarComponent } from './car/car.component';
import { RequestsService } from './services/requests.service';
import { SkillMatrixService } from './services/skill-matrix.service';
@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmployeeComponent,
    HomeComponent,
    ContactComponent,
    ConversorPipe,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SkillMatrixService],
  bootstrap: [AppComponent]
})
export class AppModule { }
