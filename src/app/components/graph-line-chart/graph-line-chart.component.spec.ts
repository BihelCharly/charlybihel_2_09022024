import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphLineChartComponent } from './graph-line-chart.component';

describe('GraphLineChartComponent', () => {
  let component: GraphLineChartComponent;
  let fixture: ComponentFixture<GraphLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphLineChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
