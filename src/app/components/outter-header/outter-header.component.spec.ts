import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutterHeaderComponent } from './outter-header.component';

describe('OutterHeaderComponent', () => {
  let component: OutterHeaderComponent;
  let fixture: ComponentFixture<OutterHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutterHeaderComponent]
    });
    fixture = TestBed.createComponent(OutterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
