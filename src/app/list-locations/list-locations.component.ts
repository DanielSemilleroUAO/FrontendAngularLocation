import { Location } from './../models/location.model';
import { DataService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-locations',
  templateUrl: './list-locations.component.html',
  styleUrls: ['./list-locations.component.css']
})
export class ListLocationsComponent implements OnInit {

  locations: Location[] = [];

  constructor(private dataService: DataService,
    private route: Router) { }

  ngOnInit() {
    this.refreshLocations();
  }

  refreshLocations(){
    this.dataService.cargarLocations().subscribe(
      (response) => {
        console.log(response);
        this.locations = response;
      }
    );
  }

  deleteLocation(id){
    this.dataService.deleteLocationById(id).subscribe(
      (response) => {
        console.log('Se elimino');
        this.refreshLocations();
      }
    );
  }

  updateLocation(id){
    this.route.navigate(['locations',id]);
  }

  addLocation(){
    this.route.navigate(['locations',-1]);
  }

}
