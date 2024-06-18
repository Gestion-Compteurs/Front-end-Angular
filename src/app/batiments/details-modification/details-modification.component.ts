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
<<<<<<< HEAD
=======
  batimentId! : number
>>>>>>> nihad3/adding_services
  // C'est pas la peine de toucher ce fichier pour le moment
  ngOnInit(): void {
  }
  // le batiment à modifier
  constructor(
<<<<<<< HEAD
    private _service: BatimentsService
  ) {
    // Il faut remplacer le bâtiment en dur par le bâtiment retrouvé depuis l'api
=======
    private route: ActivatedRoute,
    private _router: Router,
    private _service: BatimentsService,
  ) {
    this.batimentId = this.route.snapshot.params['batimentId']
    this.retrouverBatiment(this.batimentId)
>>>>>>> nihad3/adding_services
  }

  batiment$ :AjoutBatimentDto = {
    adresse: "",
    nombreEtages: 0,
    typeBatiment: "",
  }
<<<<<<< HEAD
  updateBatiment(): void{
    // Fonction pour modifier un batiment
  }
=======
 
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

>>>>>>> nihad3/adding_services
}
