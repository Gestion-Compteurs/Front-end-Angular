import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-regie-navbar',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './regie-navbar.component.html',
  styleUrl: './regie-navbar.component.css'
})
export class RegieNavbarComponent {
  logoutUser(){

  }
}
