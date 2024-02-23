import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-graph-title",
  templateUrl: "./graph-title.component.html",
  styleUrl: "./graph-title.component.scss",
})
export class GraphTitleComponent implements OnInit {
  @Input() title!: string;

  ngOnInit() {}
}
