import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';   
import { TripComponent } from './trip/trip.component';  

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'trip',
    component: TripComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
