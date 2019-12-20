import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { RouteParamComponent } from './route-param/route-param.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CustomDirective } from './custom.directive';
import { LoginComponent } from './login/login.component';
import { Pipe1Pipe } from './pipe1.pipe';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { Service1Service } from './service1.service';
import { CartService } from './cart.service'
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component,
    RouteParamComponent,
    CustomDirective,
    LoginComponent,
    Pipe1Pipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Service1Service,CartService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
