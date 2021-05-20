import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  name="";
  location="";
  id:number;
  show=false;
  restaurants=[];

  constructor(private _resService: CommonServiceService) { 
    this.restaurants = _resService.getRestaurants();
  }

  ngOnInit(): void {
  }

  addRes(res){ this._resService.addRestaurant(res);}
  deleteRes(res){ this._resService.deleteRestaurant(res);}

  editRes(res){ 
    this.show= !this.show;
    this.name=res.name;
    this.location = res.location;
  }

  updateRes(res,name){ 
    this._resService.updateRestaurant(res,name);
    this.show=!this.show;
  }

}
