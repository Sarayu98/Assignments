import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus=[];
  constructor(private _resService : CommonServiceService,private router : Router) { 
    this.menus = this._resService.getMenus();
  }
  ngOnInit(): void {
  }

  editMenu(menu)
  {
    this.router.navigate(['edit',menu]);
  }
}
