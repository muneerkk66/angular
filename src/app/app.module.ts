import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent} from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TripComponent } from './trip/trip.component';
import { Router } from '@angular/router/src/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule,MatTabsModule,MatCardModule,MatSelectModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TripComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    RouterModule.forRoot([ ]),
    AppRoutingModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
