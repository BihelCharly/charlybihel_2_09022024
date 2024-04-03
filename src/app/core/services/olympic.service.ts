import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
// Models
import { Olympic } from "../models/Olympic";

@Injectable({
  providedIn: "root",
})
export class OlympicService {
  private olympicUrl = "./assets/mock/olympic.json";
  private olympicSubject = new BehaviorSubject<Olympic[]>([]);
  public olympic = this.olympicSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  public getDatas() {
    this.http
      .get<Olympic[]>(this.olympicUrl)
      .pipe(
        catchError(() => {
          this.olympicSubject.error("An error occurred");
          this.router.navigateByUrl("/404");
          return [];
        }),
        map((datas) => {
          return datas;
        })
      )
      .subscribe((datas) => {
        this.olympicSubject.next(datas);
      });
  }
}
