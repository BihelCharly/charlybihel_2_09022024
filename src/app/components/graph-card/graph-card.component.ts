import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-graph-card",
  templateUrl: "./graph-card.component.html",
  styleUrl: "./graph-card.component.scss",
})
export class GraphCardComponent implements OnInit {
  @Input() description!: string;
  @Input() value!: string;

  ngOnInit() {}
}
