import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//My own import 
import { Route1Component } from './route1/route1.component'
import { Route2Component } from './route2/route2.component'
import { RouteParamComponent} from './route-param/route-param.component'

const routes: Routes = [
  {path: 'route1', component:  Route1Component},
  {path: 'route2', component: Route2Component },
  {path: 'routeParam', component: RouteParamComponent },
  {path: 'department/:id', component: RouteParamComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }






export const routingComponents = [Route1Component, Route2Component]