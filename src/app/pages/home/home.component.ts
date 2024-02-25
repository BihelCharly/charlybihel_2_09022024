import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { OlympicService } from "src/app/core/services/olympic.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  public olympics$: Observable<any> = of(null);

  title: string = "";

  participations: string = "";
  participationsValue: string = "";

  countries: string = "";
  countriesValue: string = "";
  // Graph
  pieChartsCountries: string = "";

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    // Subscribe to get datas
    this.olympics$.subscribe((data) => {
      console.log(data);
      // For title
      this.title = "Medals per Country";
      // For card 1
      this.participations = "Number of JOs";
      this.participationsValue = data[0].participations.length;
      // For card 2
      this.countries = "Number of Countries";
      this.countriesValue = data.length;
      // For graph pie charts
      this.pieChartsCountries = data;
    });
  }
  ngOnDestroy(): void {
    this.olympics$;
  }
}
