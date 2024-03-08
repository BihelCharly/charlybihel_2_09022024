import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { OlympicService } from "src/app/core/services/olympic.service";
import { Olympic } from "src/app/core/models/Olympic";
import { Country } from "src/app/core/models/Country";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  public olympics$: Observable<Olympic[]> = of([]);
  // graph-title
  graphTitle: string = "Medals per Country";
  // graph-card
  participationsTxt: string = "Number of JOs";
  participationsValue!: number;
  countryTxt: string = "Number of Countries";
  countryValue!: number;
  // graph-pie-charts
  array!: Olympic[];
  datasGraphPie!: Country[];

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    // Subscribe to get datas
    this.olympics$.subscribe({
      next: (datas) => {
        this.array = datas;
        console.log(this.array);
        console.log(Object.keys(this.array[0].participations).length);
        // For card 1
        this.participationsValue = Object.keys(
          this.array[0].participations
        ).length;
        // For card 2
        this.countryValue = this.array.length;
        // CREATE NEW ARRAY FOR GRAPH PIE
        this.datasGraphPie = this.array.map(({ id, country, participations }) =>
          Object.create({
            id: id,
            name: country,
            value: participations
              .map((item) => item.medalsCount)
              .reduce((prev, curr) => prev + curr, 0),
          })
        );
      },
      error: () => {
        console.error();
      },
    });
  }

  ngOnDestroy(): void {
    this.olympics$;
  }
}
