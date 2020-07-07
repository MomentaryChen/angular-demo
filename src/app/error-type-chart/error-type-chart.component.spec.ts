import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTypeChartComponent } from './error-type-chart.component';

describe('ErrorTypeChartComponent', () => {
  let component: ErrorTypeChartComponent;
  let fixture: ComponentFixture<ErrorTypeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorTypeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTypeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
