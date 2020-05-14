import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeChartsComponent } from './grade-charts.component';

describe('GradeChartsComponent', () => {
  let component: GradeChartsComponent;
  let fixture: ComponentFixture<GradeChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
