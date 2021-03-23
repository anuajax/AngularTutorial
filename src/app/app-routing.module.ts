import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoboDetailsComponent } from './robo-details/robo-details.component';
import { RobotsComponent } from './robots/robots.component';

const routes: Routes = [
  { path: 'robos', component: RobotsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'details/:id', component: RoboDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
