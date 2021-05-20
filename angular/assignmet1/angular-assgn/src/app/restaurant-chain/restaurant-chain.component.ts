import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-chain',
  templateUrl: './restaurant-chain.component.html',
  styleUrls: ['./restaurant-chain.component.css']
})
export class RestaurantChainComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
  }
  
  getUser()
  {
    this.router.navigate(['/user']);
  }

  getAdmin()
  {
    this.router.navigate(['/admin']);
  }

}
