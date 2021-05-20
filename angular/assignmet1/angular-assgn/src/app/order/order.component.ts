import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  menu =[];
  menuName;
  done="";
  constructor(private route: ActivatedRoute, private _resService : CommonServiceService) {

   }

  ngOnInit(): void {
    this.menuName = this.route.snapshot.paramMap.get('menu');
    this.menu = this._resService.showMenu(this.menuName);
    console.log(this.menu);
    
  }

  orderFood()
  {
    this.done="Your order is placed . Woohoo! enjoy the food in next 30 mins";
  }


}
