import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodService } from './services/food.service';
import { FormsModule } from '@angular/forms';
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





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerRegistrationComponent,
    LoginComponent,
    AdminpageComponent,
    CustomerpageComponent,
    AddRestaurantComponent,
    RestaurantsComponent,
    UpdateRestaurantComponent,
    AddMenuComponent,
    MenuListComponent,
    UpdateMenuComponent,
    RestaurentviewComponent,
    MenuViewComponent,
    OrderListComponent,
    AboutusComponent,
    HomeComponent,
    AdminorderviewComponent,
  

      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
