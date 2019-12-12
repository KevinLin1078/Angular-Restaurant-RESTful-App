import { Component, OnInit } from '@angular/core';

import {Router } from '@angular/router';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})

export class Route1Component implements OnInit {

  departments = [
    {'id' : 1, 'name': "Angular"},
    {'id' : 2, 'name': "Node"},
    {'id' : 3, 'name': "MongoDB"}
  ]
  constructor(private router: Router) { }

  ngOnInit() { }

  onSelect(department){
    this.router.navigate(['/department', department.id]);
    
  }

}
