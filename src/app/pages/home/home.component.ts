import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { OlympicService } from "src/app/core/services/olympic.service";
import { Router } from "@angular/router";
// Models
import { Olympic } from "src/app/core/models/Olympic";
import { GraphPie } from "src/app/core/models/GraphPie";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  // observeable
  //olympic$: Observable<Olympic[] > = this.olympicService.olympic;
  olympics$: Observable<Olympic[]> = this.olympicService.olympic;
  // public olympics$: Observable<Olympic[]> = of([]);
  // graph-title
  graphTitle: string = "Medals per Country";

  // graph-card
  // 1
  nbOfJoTxt: string = "Number of JOs";
  nbOfJoValue!: number;
  // 2
  nbOfCountryTxt: string = "Number of Countries";
  nbOfCountryValue!: number;

  // graph : datas
  datasGraphPie!: GraphPie[];

  // graph : options
  animations: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
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

  constructor(private olympicService: OlympicService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to get datas
    this.olympics$.subscribe({
      next: (datas: Olympic[]) => {
        if (datas && datas.length > 0 && datas[0].participations) {
          // card 1
          this.nbOfJoValue = Math.max(
            ...datas.map((el) => el.participations.length)
          );
          // card 2
          this.nbOfCountryValue = datas.length;
          // Data sent to GraphPie
          this.datasGraphPie = datas.map(({ country, participations, id }) =>
            Object.create({
              name: country,
              value: participations
                .map((el) => el.medalsCount)
                .reduce((prev: number, curr: number) => prev + curr, 0),
              extra: id,
            })
          );
        }
      },
      error: (error: string) => {
        console.error("An error occurred :", error);
      },
    });
  }

  ngOnDestroy(): void {
    this.olympics$;
  }

  // METHODS
  onPieClick(event: MouseEvent) {
    this.router.navigate(["/details"], {
      queryParams: { id: event },
    });
  }
}
