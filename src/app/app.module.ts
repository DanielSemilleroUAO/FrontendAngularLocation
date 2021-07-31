import { DataService } from './services/data-service.service';
import { LocationServiceService } from './services/location-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ListLocationsComponent } from './list-locations/list-locations.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    FooterComponent,
    MenuComponent,
    ListLocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LocationServiceService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
