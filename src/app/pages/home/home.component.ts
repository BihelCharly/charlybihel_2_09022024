import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { OlympicService } from "src/app/core/services/olympic.service";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  public olympics$: Observable<any> = of(null);
  // graph-title
  title: string = "";
  // graph-card
  // 1
  participationsDescription: string = "";
  participationsValue: string = "";
  // 2
  countryDescription: string = "";
  countryValue: string = "";

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    // Subscribe to get datas
    this.olympics$.subscribe((data) => {
      // For title
      this.title = "Medals per Country";
      // For card 1
      this.participationsDescription = "Number of JOs";
      this.participationsValue = data[0].participations.length;
      // For card 2
      this.countryDescription = "Number of Countries";
      this.countryValue = data.length;
    });
  }
  ngOnDestroy(): void {
    this.olympics$;
  }
}
