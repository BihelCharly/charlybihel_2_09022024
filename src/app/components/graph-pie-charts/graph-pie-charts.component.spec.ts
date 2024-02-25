import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPieChartsComponent } from './graph-pie-charts.component';

describe('GraphPieChartsComponent', () => {
  let component: GraphPieChartsComponent;
  let fixture: ComponentFixture<GraphPieChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphPieChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphPieChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
