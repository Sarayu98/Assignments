import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { Router } from '@angular/router';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  restaurants=[];
  constructor(private _resService: CommonServiceService, private router : Router) {
    this.restaurants = this._resService.getRestaurants();
   }

  ngOnInit(): void {
  }

  showMenu(resMenu)
  {
    this.router.navigate(['order',resMenu]);
  }

}
