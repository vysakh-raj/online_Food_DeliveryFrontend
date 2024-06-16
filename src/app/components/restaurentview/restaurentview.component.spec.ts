import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentviewComponent } from './restaurentview.component';

describe('RestaurentviewComponent', () => {
  let component: RestaurentviewComponent;
  let fixture: ComponentFixture<RestaurentviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurentviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
