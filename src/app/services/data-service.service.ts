import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  urlBase = "http://localhost:8080/personas-backend-java/webservice/persona";

  constructor(private httpClient: HttpClient) { }
}
