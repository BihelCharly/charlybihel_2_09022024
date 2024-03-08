// import { Injectable } from "@angular/core";
// import { BehaviorSubject, catchError, map } from "rxjs";
// import { HttpClient } from "@angular/common/http";

// import { Olympic } from "../models/Olympic";

// @Injectable({
//   providedIn: "root",
// })

// export class OlympicService {
//   datas!: Olympic[];
//   private olympicsSubject = new BehaviorSubject<Olympic[]>([]);
//   public olympics: this.olympicsSubject.asObservable(Olympic[]);

//   constructor(private http: HttpClient) {}

//   public setOlympics() {
//     this.http.get<Olympic[]>("./assets/mock/olympic.json")
//       .pipe(
//         catchError(() => {
//           this.olympicsSubject .error('An error occurred');
//           return [];
//         }),
//         map((olympics) => {
//           return olympics;
//         })
//       )
//       .subscribe((olympics) => {
//         this.olympicsSubject .next(olympics);
//       });
//   }

// }
