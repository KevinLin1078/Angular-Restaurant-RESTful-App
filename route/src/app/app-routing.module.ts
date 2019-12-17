import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//My own import 
import { Route1Component } from './route1/route1.component'
import { Route2Component } from './route2/route2.component'
import { RouteParamComponent} from './route-param/route-param.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {path: '', component:  Route1Component},
  {path: 'login', component: LoginComponent }
  // {path: '', component:  Route1Component},
  // {path: 'routeParam', component: RouteParamComponent },
  // {path: 'department/:id', component: RouteParamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
