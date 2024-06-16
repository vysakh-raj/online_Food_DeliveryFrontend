import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { LoginComponent } from './components/login/login.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { CustomerpageComponent } from './components/customerpage/customerpage.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { RestaurantsComponent } from './components/restaurantlist/restaurantlist.component';
import { UpdateRestaurantComponent } from './components/update-restaurent/update-restaurent.component';
import { AddMenuComponent } from './components/addmenu/addmenu.component';
import { MenuListComponent } from './components/menulist/menulist.component';
import { UpdateMenuComponent } from './components/updatemenu/updatemenu.component';
import { RestaurentviewComponent } from './components/restaurentview/restaurentview.component';
import { MenuViewComponent } from './components/menuview/menuview.component';
import { OrderListComponent } from './components/orderlist/orderlist.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { AdminorderviewComponent } from './components/adminorderview/adminorderview.component';

const routes: Routes = [
  { path: 'register', component: CustomerRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminpage', component: AdminpageComponent },
  { path: 'customerpage', component: CustomerpageComponent },
  { path: 'addrest', component: AddRestaurantComponent},
  { path: 'restaurentList', component: RestaurantsComponent},
  { path: 'updateres/:id', component: UpdateRestaurantComponent},
  { path: 'addmenu', component:AddMenuComponent },
  { path: 'menulist', component:MenuListComponent },
  { path: 'updatemenu/:id', component:UpdateMenuComponent },
  { path: 'restview', component:RestaurentviewComponent },
  { path: 'menuview', component:MenuViewComponent },
  { path: 'orders', component:OrderListComponent },
  { path: 'aboutus', component:AboutusComponent },
  { path: '', component:HomeComponent },
  { path: 'adminorders', component:AdminorderviewComponent },
  






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
