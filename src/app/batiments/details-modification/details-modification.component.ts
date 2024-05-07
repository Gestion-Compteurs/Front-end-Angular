import { Component, OnInit } from '@angular/core';
import { BatimentsDto } from '../../DTOs/BatimentsDto';
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details-modification',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    CustomNavbarComponent
  ],
  templateUrl: './details-modification.component.html',
  styleUrl: './details-modification.component.css'
})
export class DetailsModificationComponent implements OnInit{
    ngOnInit(): void {


    }
    // le batiment à modifier
    batiment$ :BatimentsDto = {
      batimentId: 0,
      adresse: "",
      nombre_etages: 0,
      type_batiment: "",

    }
    updateBatiment(): void{
      // Fonction pour modifier un batiment
    }
}
