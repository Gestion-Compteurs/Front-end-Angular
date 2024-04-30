import {Component, OnInit} from '@angular/core';
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import {RouterLink} from "@angular/router";
import {ReleveDto} from "../../DTOs/ReleveDto";

@Component({
  selector: 'app-details-modification',
  standalone: true,
  imports: [
    CustomNavbarComponent,
    RouterLink
  ],
  templateUrl: './details-modification.component.html',
  styleUrl: './details-modification.component.css'
})
export class DetailsModificationComponent implements OnInit{
  // La relève
  releve:ReleveDto = {
    releveId: 1,
    compteurId: 2,
    batimentId: 15,
    agentId: 42,
    dateReleve: new Date()
  }
  ngOnInit(): void {
    // Retrouver la relève

  }

}
