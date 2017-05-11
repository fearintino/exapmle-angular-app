import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {ArchivesComponent} from "./archives.component";
import {ArchiveComponent} from "./archive.component";

@Component({
  selector: 'navbar',
  templateUrl: '/app/navbar.component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class NavBarComponent {
}