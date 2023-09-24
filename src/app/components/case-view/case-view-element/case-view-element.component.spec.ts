import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseViewElementComponent } from './case-view-element.component';

describe('CaseViewElementComponent', () => {
  let component: CaseViewElementComponent;
  let fixture: ComponentFixture<CaseViewElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseViewElementComponent]
    });
    fixture = TestBed.createComponent(CaseViewElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
