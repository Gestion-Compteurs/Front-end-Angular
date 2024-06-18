import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  // Identifiant recherché
  searchId: string = ""
  // Nom recherché
  searchName: string = ""
}
