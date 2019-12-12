import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route';
  public kitchens
  constructor(private HttpClient : HttpClient){}
  
  
  ngOnInit() {
    this.HttpClient.get('http://18.222.73.77').subscribe(response => {
        this.kitchens = response.kitchens
      })
  }
}
