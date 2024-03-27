![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Mathieu-Hallez/Developpez-le-front-end-en-utilisant-Angular)


# OlympicGamesStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2, [Node](https://nodejs.org/en/) version 20.10.0, [npm](https://www.npmjs.com/package/npm) 10.5.0. and cloned from *[Developpez-le-front-end-en-utilisant-Angular](https://github.com/OpenClassrooms-Student-Center/Developpez-le-front-end-en-utilisant-Angular)*.

Don't forget to install [NodeJS](https://nodejs.org/fr) and your node_modules before starting with (`npm install`).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## How the code is constructed

As of the architecture already defined at project startup, the current release includes the following:

- `components` folder : contains every reusable components
- `core` folder : contains business logic :
  - `models` folders : set reusable typescript interfaces for both initial dataset from datatable and rendering models
  - `services`folder : reusable service for business logic. <br>
  Here is currently available OlympicService, I updated the service as recommanded from Angular 17 best practices.
- `pages` folder : contains components for routing
  - `home` homepage as standard base path.
  - `details` detailed view per country as graph : summarized number of participation's and total of medals won as well as the total of athletes.
  - `not-found` page can only be available if the data can not be gathered by the service from the dataset.


### Best Practise :
* Update angular requirement to latest angular 17 version
* [Angular Docs](https://angular.io/docs) recommanded

## Visual library :
* [ngx-charts](https://swimlane.gitbook.io/ngx-charts/) used as visual charts for this application. <br>

Good luck !
