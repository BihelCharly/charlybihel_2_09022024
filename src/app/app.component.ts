import { Component, OnInit } from "@angular/core";
import { OlympicService } from "./core/services/olympic.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  imageUrl!: string;
  imageTitle: string = "Logo";

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.imageUrl = '../assets/img/logo.png';
    this.olympicService.getDatas();
  }
}
