import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-route-param',
  templateUrl: './route-param.component.html',
  styleUrls: ['./route-param.component.css']
})


export class RouteParamComponent implements OnInit {
  
  public department_id;


  constructor(private route : ActivatedRoute) { }
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.department_id = id
  }


}
