import { Component } from "@angular/core";

@Component({
  selector: "app-graph-pie-charts",
  templateUrl: "./graph-pie-charts.component.html",
  styleUrl: "./graph-pie-charts.component.scss",
})
export class GraphPieChartsComponent {
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 },
  ];
}
