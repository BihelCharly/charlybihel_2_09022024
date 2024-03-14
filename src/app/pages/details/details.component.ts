import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { OlympicService } from "src/app/core/services/olympic.service";

import { Olympic } from "src/app/core/models/Olympic";
import { Participation } from "src/app/core/models/Participation";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrl: "./details.component.scss",
})
export class DetailsComponent implements OnInit, OnDestroy {
  public olympics$: Observable<Olympic[]> = of([]);
  idUrl!: string;
  // graph-title
  graphTitle: string = "Name of the country";
  // graph-card
  // 1
  nbOfEntriesTxt = "Number of entries";
  nbOfEntriesValue!: number;
  // 2
  nbOfMedalsTxt = "Total Number medals";
  nbOfMedalsValue!: number;
  // 3
  nbOfAthletesTxt = "Total number of athletes";
  nbOfAthletesValue!: number;

  // graph : datas
  array!: any[];
  datasTest!: any[];
  //datasGraphLine!: Participations[];
  // graph : options

  // graph array
  datasGraphLine = [
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
  animations: boolean = true;
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

  constructor(
    private olympicService: OlympicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get and subscribe to Url
    this.route.queryParams.subscribe((params) => {
      this.idUrl = params["id"];
    });
    this.olympics$ = this.olympicService.getOlympics();
    // Subscribe to get datas
    this.olympics$.subscribe({
      next: (datas) => {
        const object = datas.filter((el) => el.id === +this.idUrl);
        console.log(object);
        this.datasTest = object.map(({ participations }) =>
          Object.create({
            value: participations
              .map((el: any) => el.medalsCount)
              .reduce((prev: number, curr: number) => prev + curr, 0),
          })
        );
      },
      error: () => {
        console.error();
      },
    });
    console.log(this.datasTest);
    // Cards
    this.nbOfEntriesValue = 3;
    this.nbOfMedalsValue = 5;
    this.nbOfAthletesValue = 32;
  }

  ngOnDestroy(): void {}
}
