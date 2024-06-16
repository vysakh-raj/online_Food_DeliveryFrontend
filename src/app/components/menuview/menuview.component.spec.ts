import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuViewComponent } from './menuview.component';

describe('MenuviewComponent', () => {
  let component: MenuViewComponent;
  let fixture: ComponentFixture<MenuViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
