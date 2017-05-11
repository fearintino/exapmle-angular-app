import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {ArchivesComponent} from "./archives.component";
import {ArchiveComponent} from "./archive.component";
import {NavBarComponent} from "./navbar.component";

@Component({
  selector: 'my-app',
  template: `<navbar></navbar>`,
  directives: [ROUTER_DIRECTIVES, NavBarComponent],
})
@RouteConfig([
  {path: '/', name: 'Archives', component: ArchivesComponent},
  {path: '/archives/:year/:month', name: 'Archive', component: ArchiveComponent},
  {path: '/*other', name: 'Other', redirectTo: ['Archives']}
])
export class AppComponent {
}