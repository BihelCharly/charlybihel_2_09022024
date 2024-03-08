import { Component, OnDestroy, OnInit } from "@angular/core";
import { OlympicService } from "src/app/core/services/olympic.service";
import { Olympic } from "src/app/core/models/Olympic";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrl: "./details.component.scss",
})
export class DetailsComponent implements OnInit, OnDestroy {
  // graph-title
  graphTitle: string = "Name of the country";
  // graph-card
  // 1
  nbOfEntriesTxt!: string;
  nbOfEntriesValue!: number;
  // 2
  nbOfMedalsTxt!: string;
  nbOfMedalsValue!: number;
  // 3
  nbOfAthletesTxt!: string;
  nbOfAthletesValue!: number;
  // graph-pie-charts
  datasGraphLine!: any[];
  constructor() {}
  ngOnInit(): void {
    this.nbOfEntriesTxt = "Number of entries";
    this.nbOfEntriesValue = 3;
    this.nbOfMedalsTxt = "Total Number medals";
    this.nbOfMedalsValue = 5;
    this.nbOfAthletesTxt = "Total number of athletes";
    this.nbOfAthletesValue = 32;
    // Graph
  }
  ngOnDestroy(): void {}
}
