import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMenuComponent } from './updatemenu.component';

describe('UpdatemenuComponent', () => {
  let component: UpdateMenuComponent;
  let fixture: ComponentFixture<UpdateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
