import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-route-param',
  templateUrl: './route-param.component.html',
  styleUrls: ['./route-param.component.css']
})


export class RouteParamComponent implements OnInit {
  
  public department_id;
  constructor(private ActivatedRoute : ActivatedRoute, private Router: Router) { }
  

  async ngOnInit() {
    
    // let id = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id'))
    // this.department_id = id
    console.log("async")
    console.log(this.ActivatedRoute.paramMap.get('id'))
    // var func = this.ActivatedRoute.paramMap.subscribe((params:ParamMap) =>{
    //   let id = parseInt(params.get('id'))
    //   this.department_id = id
    // })
    
    

  }

  goPrevious(){
    this.department_id = this.department_id - 1
    this.Router.navigate(['/department', this.department_id])
  }

  goNext(){
    this.department_id = this.department_id + 1
    this.Router.navigate(['/department', this.department_id])
  }
}
