import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { OlympicService } from "src/app/core/services/olympic.service";
import { Router } from "@angular/router";
// Models
import { Olympic } from "src/app/core/models/Olympic";
import { Country } from "src/app/core/models/Country";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  // observeable
  public olympics$: Observable<Olympic[]> = of([]);

  // graph-title
  graphTitle: string = "Medals per Country";
  // graph-card
  // 1
  participationsTxt: string = "Number of JOs";
  participationsValue!: number;
  // 2
  countryTxt: string = "Number of Countries";
  countryValue!: number;

  // graph : datas
  array!: Olympic[];
  datasGraphPie!: Country[];
  // graph : options
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

  constructor(private olympicService: OlympicService, private router: Router) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    // Subscribe to get datas
    this.olympics$.subscribe({
      next: (datas: Olympic[]) => {
        this.array = datas;
        // POURQUOI ERREUR ICI ? console.log(Object.keys(this.array[0].participations).length);
        // card 1
        this.participationsValue = Object.keys(
          this.array[0].participations
        ).length;
        // card 2
        this.countryValue = this.array.length;
        // Data sent to GraphPie
        this.datasGraphPie = this.array.map(({ country, participations, id }) =>
          Object.create({
            name: country,
            value: participations
              .map((el) => el.medalsCount)
              .reduce((prev: number, curr: number) => prev + curr, 0),
            extra: id,
          })
        );
      },
      error: (error: string) => {
        console.error(error);
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
