import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AllTimesheetComponent } from './all-timesheet/all-timesheet.component';
import { MyTimesheetComponent } from './my-timesheet/my-timesheet.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideMenuComponent,
    AllTimesheetComponent,
    MyTimesheetComponent,
    MyProjectComponent,
    MyProfileComponent,
    SettingsComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
