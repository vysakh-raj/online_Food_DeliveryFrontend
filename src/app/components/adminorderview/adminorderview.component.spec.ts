import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminorderviewComponent } from './adminorderview.component';

describe('AdminorderviewComponent', () => {
  let component: AdminorderviewComponent;
  let fixture: ComponentFixture<AdminorderviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminorderviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminorderviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
