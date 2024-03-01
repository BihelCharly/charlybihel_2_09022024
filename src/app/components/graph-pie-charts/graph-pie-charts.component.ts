import { Component, OnInit } from "@angular/core";
import { OlympicService } from "src/app/core/services/olympic.service";
import { Observable, of } from "rxjs";
import { filter, map } from "rxjs/operators";
import { from } from "rxjs";

@Component({
  selector: "app-graph-pie-charts",
  templateUrl: "./graph-pie-charts.component.html",
  styleUrl: "./graph-pie-charts.component.scss",
})
export class GraphPieChartsComponent implements OnInit {
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 },
  ];

  source = from([
    {
      id: 1,
      country: "Italy",
      participations: [
        {
          id: 1,
          year: 2012,
          city: "Londres",
          medalsCount: 28,
          athleteCount: 372,
        },
        {
          id: 2,
          year: 2016,
          city: "Rio de Janeiro",
          medalsCount: 28,
          athleteCount: 375,
        },
        {
          id: 3,
          year: 2020,
          city: "Tokyo",
          medalsCount: 40,
          athleteCount: 381,
        },
      ],
    },
    {
      id: 2,
      country: "Spain",
      participations: [
        {
          id: 1,
          year: 2012,
          city: "Londres",
          medalsCount: 20,
          athleteCount: 315,
        },
        {
          id: 2,
          year: 2016,
          city: "Rio de Janeiro",
          medalsCount: 17,
          athleteCount: 312,
        },
        {
          id: 3,
          year: 2020,
          city: "Tokyo",
          medalsCount: 17,
          athleteCount: 321,
        },
      ],
    },
  ]);
  public olympics$: Observable<any> = of(null);
  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    // Subscribe to get datas
    this.olympics$.subscribe((data) => {
      console.log(data);
    });
    // CREATE NEW ARRAY FOR GRAPH PIE
    const createNewArray = this.source.pipe(
      map(({ country, participations }) =>
        Object.create({
          name: country,
          value: participations
            .map((item) => item.medalsCount)
            .reduce((prev, curr) => prev + curr, 0),
        })
      )
    );
    createNewArray.subscribe((val) => console.log(val));
  }
}
