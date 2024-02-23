import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GraphTitleComponent } from "./graph-title.component";

describe("GraphTitleComponent", () => {
  let component: GraphTitleComponent;
  let fixture: ComponentFixture<GraphTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GraphTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
