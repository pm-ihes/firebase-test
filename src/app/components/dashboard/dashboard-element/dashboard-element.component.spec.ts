import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardElementComponent } from './dashboard-element.component';

describe('DashboardElementComponent', () => {
  let component: DashboardElementComponent;
  let fixture: ComponentFixture<DashboardElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardElementComponent]
    });
    fixture = TestBed.createComponent(DashboardElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
