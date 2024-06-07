import { Component, OnInit } from '@angular/core';
import { BatimentsDto } from '../../DTOs/BatimentsDto';
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AjoutBatimentDto} from "../../DTOs/BatimentDto";
import {BatimentsService} from "../../services/batiments/batiments.service";
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
  batimentId! : number
  // C'est pas la peine de toucher ce fichier pour le moment
  ngOnInit(): void {
  }
  // le batiment à modifier
  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _service: BatimentsService,
  ) {
    this.batimentId = this.route.snapshot.params['batimentId']
    this.retrouverBatiment(this.batimentId)
  }

  batiment$ :AjoutBatimentDto = {
    adresse: "",
    nombreEtages: 0,
    typeBatiment: "",
  }
 
    // Fonction pour modifier un batiment
    updateBatiment(batimentId: number): void {
      let modificationBatimentDto: AjoutBatimentDto = {
        adresse: this.batiment$.adresse,
        nombreEtages: this.batiment$.nombreEtages,
        typeBatiment: this.batiment$.typeBatiment
      };
  
      this._service.updateBatiment(batimentId, modificationBatimentDto).subscribe({
        next: value => {
          this._router.navigate(['/batiments']).then(r => {
            console.log(`Bâtiment modifié : ${value}`);
          });
        },
        error: err => {
          console.log(`Une erreur s'est produite lors de la modification du bâtiment : ${err}`);
        }
      });
    }
  
 
  retrouverBatiment(batimentId: number): void {
    this._service.retrouverBatimentsEtInstancesCompteurs(batimentId).subscribe({
      next: value => {
        this.batiment$ = value;
        console.log(`Bâtiment retrouvé depuis la base de données : ${this.batiment$}`);
      },
      error: err => {
        console.log(`Une erreur s'est produite durant la recherche du bâtiment : ${err}`);
      }
    });
  }

}
