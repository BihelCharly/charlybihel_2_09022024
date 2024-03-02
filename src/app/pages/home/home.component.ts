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
  public olympics$: Observable<any> = of(null);
  source!: Olympic[];
  // graph-title
  title: string = "";
  // graph-card
  participationsDescription: string = "";
  participationsValue: string = "";
  countryDescription: string = "";
  countryValue: string = "";
  // graph-pie-charts
  datasGraphPie!: Country[];

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    // Subscribe to get datas
    this.olympics$.subscribe({
      next: (data) => {
        this.source = data;
        // For title
        this.title = "Medals per Country";
        // For card 1
        this.participationsDescription = "Number of JOs";
        this.participationsValue = data[0].participations.length;
        // For card 2
        this.countryDescription = "Number of Countries";
        this.countryValue = data.length;
        // CREATE NEW ARRAY FOR GRAPH PIE
        const createNewArray = this.source.map(
          ({ id, country, participations }) =>
            Object.create({
              id: id,
              name: country,
              value: participations
                .map((item) => item.medalsCount)
                .reduce((prev, curr) => prev + curr, 0),
            })
        );
        this.datasGraphPie = createNewArray;
      },
      error: () => {},
    });
  }

  ngOnDestroy(): void {
    this.olympics$;
  }
}
