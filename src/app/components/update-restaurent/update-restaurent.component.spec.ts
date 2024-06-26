import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestaurantComponent } from './update-restaurent.component';

describe('UpdateRestaurentComponent', () => {
  let component: UpdateRestaurantComponent;
  let fixture: ComponentFixture<UpdateRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateRestaurantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
