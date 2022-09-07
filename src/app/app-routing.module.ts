import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTimesheetComponent } from './all-timesheet/all-timesheet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { MyTimesheetComponent } from './my-timesheet/my-timesheet.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path:'', component:DashboardComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'all-timesheets', component:AllTimesheetComponent
  },
  {
    path:'my-timesheets', component:MyTimesheetComponent
  },
  {
    path:'my-project', component:MyProjectComponent
  },
  {
    path:'my-profile', component:MyProfileComponent
  },
  {
    path:'settings', component:SettingsComponent
  }
  ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
