import { Location } from './../models/location.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  id: number;
  location: Location;

  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.location = new Location(this.id,'',0);
    if(this.id != -1 ){
      this.dataService.findLocationById(this.id).subscribe(
        (response) => {
          console.log(response);
          this.location = response;
        }
      );
    }
  }

  saveLocation(){
    if(this.id < 0){
      console.log(this.location);
      this.dataService.createLocation(this.location).subscribe(
        (data)=>{
          console.log(data);
          this.router.navigate(['locations']);
        }
      );
    } else {
      this.dataService.updateLocationById(this.id, this.location).subscribe(
        (data)=>{
          this.router.navigate(['locations']);
        }
      );
    }
  }

  saveLocationCreate(){

  }

}
