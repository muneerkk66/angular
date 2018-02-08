import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material';
import {Response,HttpServicesService}  from '../http-services.service'; 
import {TripmodelService}  from '../tripmodel.service'; 
import { print } from 'util';
@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css'],
  providers:[HttpServicesService]
})

export class TripComponent implements OnInit {
  response:Response
  trip:TripmodelService
  title:string
  constructor(private configService: HttpServicesService) {}

  ngOnInit():void {
    this.showConfig()
  }
  showConfig() {
    this.configService.getConfig()
      .subscribe(data => this.response = {
          response_string: data[0]
          
      });
    console.log(this.response)
    //this.trip.title = this.response.response_string["title"];
    //this.title = this.response.response_string["title"];
      
  }
}
