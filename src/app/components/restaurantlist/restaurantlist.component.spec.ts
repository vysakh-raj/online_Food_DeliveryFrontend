import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsComponent } from './restaurantlist.component';

describe('RestaurantlistComponent', () => {
  let component: RestaurantsComponent;
  let fixture: ComponentFixture<RestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
