import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantChainComponent } from './restaurant-chain/restaurant-chain.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';
 

const routes: Routes = [
  {path: '', redirectTo:'/restaurantChain', pathMatch:'full'},
  {path: 'restaurantChain', component: RestaurantChainComponent},
  {path: 'user',component: UserComponent},
  {path: 'admin',component: AdminComponent},
  {path: 'menu',component: MenuComponent},
  {path: 'restaurant',component: RestaurantComponent},
  {path: 'order/:menu',component: OrderComponent},
  {path: 'edit/:menu',component: EditMenuComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents =[AdminComponent,MenuComponent,RestaurantComponent,UserComponent,PageNotFoundComponent,RestaurantChainComponent,OrderComponent,EditMenuComponent];
