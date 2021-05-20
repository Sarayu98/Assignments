import { Injectable } from '@angular/core';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  //********dummy data **********//
  restaurants=[
    {
      name:'Taj Hotel',
      location:'Las Vegas',
      assignedMenu:'Menu 1'
    },
    {
      name:'Oberoi Palace',
      location:'Goregaon',
      assignedMenu:'Menu 2'
    },
    {
      name:'Subway',
      location:'Malad',
      assignedMenu:'Menu 3'
    }
  ];
  Menus=['Menu 1','Menu 2','Menu 3'];
  Menu=[
    {
      name:'Menu 1',
      items:[
        {
          item:'burger',
          price: 70
        },
        {
          item:'paneer chilli',
          price: 120
        }
      ]
    },
    {
      name:'Menu 2',
      items:[
        {
          item:'Dal makhni',
          price: 130
        },
        {
          item:'Kaju Kofta curry',
          price: 250
        }
      ]
    },
    {
      name:'Menu 3',
      items:[
        {
          item:'Dal Tadka',
          price: 100
        },
        {
          item:'Gulab Jamun',
          price: 150
        }
      ]
    }
  ]
  constructor() { }


  /********** Operations for menu and restaurant *********/

  /**************** For restaurant *********************/
  getRestaurants(){ return this.restaurants;}

  addRestaurant(res){ this.restaurants.push(res);}

  deleteRestaurant(res)
  {
    this.restaurants.forEach(element => {
      if(element.name === res.name)
      {
        this.restaurants.splice(this.restaurants.indexOf(element),1);
      }
    });
  }

  updateRestaurant(res,name)
  {
    this.restaurants.forEach(element => {
      if(element.name == name)
      {
        element.name = res.name;
        element.location = res.location;
      }
    });
  }

  assignMenuToRestaurant(menu,resName)
  {
    this.restaurants.forEach(element => {
      if(element.name == resName)
      {
        element.assignedMenu =menu;
      }
    });
  }

  /**************** For Menu *********************/

  getMenus(){ return this.Menus;}
  getMenu(){ return this.Menu};

  addItem(item,name)
  {
    this.Menu.forEach(element => {
      if(element.name == name)
      {
        element.items.push(item);
      }
    });
  }

  deleteItem(item)
  {
    this.Menu.forEach(element => {
      element.items.forEach(fooditem => {
        if(fooditem.item  == item.item)
        {
          element.items.splice(element.items.indexOf(fooditem),1);
        }
      });
    });
  }

  editItem(menu,item)
  {
    this.Menu.forEach(element => {
      element.items.forEach(fooditem => {
        if(fooditem.item  == item)
        {
          element.items.splice(element.items.indexOf(item),1);
        }
      });
    });
  }

  updateMenuItem(item,name)
  {
    this.Menu.forEach(element => {
      element.items.forEach(fooditem => {
        if(fooditem.item  == name)
        {
          fooditem.item = item.item;
          fooditem.price = item.price;
        }
      });
    });
  }

  showMenu(name)
  {
    let temp;
    this.Menu.forEach(element => {
      if(element.name == name)
      {
        temp=(element.items);
      }
    });
    return temp;
  }

  assignMenu(res,menuName)
  {
    console.log(res.assign);
    
    this.restaurants.forEach(element => {
      if(element.name == res.assign)
      {
        element.assignedMenu = menuName;
      }
    });
  }
}

 