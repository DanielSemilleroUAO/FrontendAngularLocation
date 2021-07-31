import { Location } from './../models/location.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlBase = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) { }

  cargarLocations(){
    return this.http.get<Location[]>(this.urlBase + "/locations");
  }

  findLocationById(id: number){
    return this.http.get<Location>(this.urlBase + "/locations/" + id);
  }

  updateLocationById(id: number, location: Location){
    return this.http.patch(this.urlBase + "/locations/" + id, location);
  }

  deleteLocationById(id: number){
    return this.http.delete(this.urlBase + "/locations/" + id)
  }

  createLocation(location:Location){
    return this.http.post(this.urlBase + "/locations", location);
  }


}
