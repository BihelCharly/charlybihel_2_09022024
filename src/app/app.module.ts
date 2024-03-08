import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { GraphTitleComponent } from "./components/graph-title/graph-title.component";
import { GraphCardComponent } from "./components/graph-card/graph-card.component";
import { GraphPieChartsComponent } from "./components/graph-pie-charts/graph-pie-charts.component";
import { DetailsComponent } from "./pages/details/details.component";
import { GraphLineChartComponent } from "./components/graph-line-chart/graph-line-chart.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    GraphTitleComponent,
    GraphCardComponent,
    GraphPieChartsComponent,
    DetailsComponent,
    GraphLineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
