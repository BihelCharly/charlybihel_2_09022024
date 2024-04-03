import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { OlympicService } from "src/app/core/services/olympic.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
// Models
import { Olympic } from "src/app/core/models/Olympic";
import { GraphLine } from "src/app/core/models/GraphLine";
import { Participation } from "src/app/core/models/Participation";


@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrl: "./details.component.scss",
})
export class DetailsComponent implements OnInit, OnDestroy {
  // observeable
  olympics$: Observable<Olympic[]> = this.olympicService.olympic;
  subscription!: Subscription;
  // url
  idUrl!: string;

  // graph-title
  graphTitle!: string;

  // graph-card
  // 1
  nbOfEntriesTxt: string = "Number of entries";
  nbOfEntriesValue!: number;
  // 2
  nbOfMedalsTxt: string = "Total Number medals";
  nbOfMedalsValue!: number;
  // 3
  nbOfAthletesTxt: string = "Total number of athletes";
  nbOfAthletesValue!: number;

  // graph : datas
  array!: Olympic[];
  datasGraphLine!: GraphLine[];
  // graph : options
  autoScale: boolean = true;
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showXAxisLabel: boolean = true;
  roundDomains: boolean = true;
  wrapTicks: boolean = true;
  xAxisLabel: string = "Dates";

  gridLines: boolean = true;

  xScaleMin = 2012;
  xScaleMax = 2020;

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
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Get and subscribe to Url
    this.route.queryParams.subscribe((params) => {
      this.idUrl = params["id"];
    });
    // Subscribe to get datas
    this.subscription  = this.olympics$.subscribe({
        error: (error: string) => {
          console.error("An error occurred :", error);
          this.router.navigateByUrl("/404");
        },
        next: (datas: Olympic[]) => {
          if (datas.length == 0) {
            this.router.navigateByUrl("/404");
          } else if (datas && datas.length > 0 && datas[0].participations) {
            this.array = datas.filter((el: Olympic) => el.id === +this.idUrl);
            this.graphTitle = this.array[0].country;
            this.nbOfEntriesValue = this.array[0].participations.length;
            this.nbOfMedalsValue = this.array[0].participations.reduce(
              (prev: number, curr: any) => prev + curr.medalsCount,
              0
            );
            this.nbOfAthletesValue = this.array[0].participations.reduce(
              (prev: number, curr) => prev + curr.athleteCount,
              0
            );
            this.datasGraphLine = this.array.map(
              ({ country, participations }) =>
                Object.create({
                  name: country,
                  series: participations.map((el: Participation) => {
                    return {
                      name: el.year.toString(),
                      value: el.medalsCount,
                    };
                  }),
                })
            );
          }
        },
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
