import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-graph-line-chart",
  templateUrl: "./graph-line-chart.component.html",
  styleUrl: "./graph-line-chart.component.scss",
})
export class GraphLineChartComponent implements OnInit {
  single = [
    {
      name: "France",
      series: [
        {
          name: "1990",
          value: 62000000,
        },
        {
          name: "2010",
          value: 73000000,
        },
        {
          name: "2011",
          value: 89400000,
        },
      ],
    },
  ];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = "Dates";
  timeline: boolean = true;
  gridLines: boolean = true;
  domains: boolean = true;
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

  ngOnInit(): void {}
}
