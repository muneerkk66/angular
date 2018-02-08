import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export interface Response {
   response_string : {};
}
@Injectable()

export class HttpServicesService {

  constructor(private http: HttpClient) { }
  configUrl = 'http://127.0.0.1:8000/get/all/';

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
