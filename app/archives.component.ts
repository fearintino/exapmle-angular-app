import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";

// [routerLink]=“[‘AlbumDetail’,
// {
//   id:
//     1
// }]
@Component({
  selector: 'archives',
  //language=Angular2HTML format=false
  template: `
      <h1>Home</h1>
      <div *ngFor="#archive of archives">
        <a [routerLink]="['Archive', {year: archive.year, month: archive.month}]">
          {{ archive.year }}/{{ archive.month }}
        </a>
      </div>
  `,
  directives: [ROUTER_DIRECTIVES],
})
export class ArchivesComponent {
  private archives = [
    {year: 2016, month: 1},
    {year: 2016, month: 2},
    {year: 2016, month: 3},
  ];
}