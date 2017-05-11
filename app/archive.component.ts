import {Component} from "angular2/core";
import {RouteParams} from "angular2/router";

@Component({
  selector: 'archive',
  template: `
      <h1>{{ year }} / {{ month }}</h1>
  `
})
export class ArchiveComponent {
  private year;
  private month;

  constructor(routeParams: RouteParams) {
    this.year = routeParams.get('year');
    this.month = routeParams.get('month');
  }
}