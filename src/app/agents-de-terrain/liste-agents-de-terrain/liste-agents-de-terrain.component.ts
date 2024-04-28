import { Component } from '@angular/core';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";

@Component({
  selector: 'app-liste-agents-de-terrain',
  standalone: true,
  imports: [
    CustomNavbarComponent,
    SidenavComponent
  ],
  templateUrl: './liste-agents-de-terrain.component.html',
  styleUrl: './liste-agents-de-terrain.component.css'
})
export class ListeAgentsDeTerrainComponent {

}
