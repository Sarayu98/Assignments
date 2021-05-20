import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from '../common-service.service';


@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  menu=[];
  restaurants=[];
  item:string;
  price: number;
  show: boolean =false;
  name: string;
  constructor(private _resService : CommonServiceService, private route: ActivatedRoute, private location : Location) {
   
   }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('menu');
    this.menu = this._resService.showMenu(this.name);
    this.restaurants= this._resService.getRestaurants();
  }

  editItem(item)
  {
    this.item = item.item;
    this.price = item.price;
    this.show= !this.show;
  }

  update(newItem,oldItem)
  {
    this._resService.updateMenuItem(newItem,oldItem);
    this.show= !this.show;
  }

  assignMenu(value,menuName)
  {
    console.log(this.restaurants);
    this._resService.assignMenu(value,menuName);
    console.log(this.restaurants);
    
  }

  deleteItem(item){ this._resService.deleteItem(item);}

  add(item,name){ this._resService.addItem(item,name);}

}
