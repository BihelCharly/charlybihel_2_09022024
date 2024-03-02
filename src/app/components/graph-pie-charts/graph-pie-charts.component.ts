import { Component, Input } from "@angular/core";
import { Country } from "src/app/core/models/Country";

@Component({
  selector: "app-graph-pie-charts",
  templateUrl: "./graph-pie-charts.component.html",
  styleUrl: "./graph-pie-charts.component.scss",
})
export class GraphPieChartsComponent {
  @Input() datas!: Country[];

  // Graph options
  showLegend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = false;
  customColors = [
    {
      name: "Germany",
      value: "#744051",
    },
    {
      name: "United States",
      value: "#8C9FD8",
    },
    {
      name: "France",
      value: "#94809F",
    },
    {
      name: "United Kingdom",
      value: "#C4DEF0",
    },
    {
      name: "Spain",
      value: "#BACAE5",
    },
    {
      name: "Italy",
      value: "#906365",
    },
  ];

  onGraphClick() {
    console.log("click");
  }
}
