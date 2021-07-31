import { ListLocationsComponent } from './list-locations/list-locations.component';
import { FormularioComponent } from './formulario/formulario/formulario.component';
import { LocationComponent } from './location/location.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:ListLocationsComponent},
  {path:'locations', component: ListLocationsComponent},
  {path:'locations/:id', component: LocationComponent},
  {path:'**', component: ListLocationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
