import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { DetailsComponent } from "./pages/details/details.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    component: HomeComponent,
    title: "OlympicGamesStarter - Dashboard page",
  },
  {
    path: "details",
    component: DetailsComponent,
    title: "OlympicGamesStarter - Details page",
  },
  {
    path: "**", // wildcard
    component: NotFoundComponent,
    title: "404 - Not Found page",
  },
  {
    path: "404", // wildcard
    component: NotFoundComponent,
    title: "404 - Not Found page",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
