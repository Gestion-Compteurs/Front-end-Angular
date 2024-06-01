import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Observable} from "rxjs";
import {RegisterAgentDeTerrainRequestDto} from "../../DTOs/AgentDeTerrainDto";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";
import { AgentsDeTerrainService } from '../../services/agents-de-terrain/agents-de-terrain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  standalone: true,
    imports: [
        FormsModule,
        NgOptimizedImage,
        NgIf,
        CustomNavbarComponent
    ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  constructor(
    private _service: AgentsDeTerrainService,
    private _router: Router
  ) {
  }
  // L'agent à enregistrer
  agent$ :RegisterAgentDeTerrainRequestDto = {
    nom: "",
    prenom: "",
    cin: "",
    regieId: 0,
    dateDeNaissance: new Date(),
    civilite: "",
    dateEmbauche: new Date(),
  }

  
  // Sa photo
  selectedFile: string | ArrayBuffer | null = null;
  registerAgentDeTerrain(): void{
    // Fonction pour enregistrer un agent de terrain
    this._service.ajouterAgentDeTerrain(this.agent$).subscribe({
      next : value => {
        console.log(`Agent de terrain ajouté : ${value}`)
        this._router.navigate(['/']).then(r =>
          console.log("Agent de terrain ajouté avec succès et redirection effectuée !!")
        )
      },
      error : err => {
        alert("Il y'a eu une erreur lors de l'ajout d'agent !")
      }
    })
  }

  

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectedFile = reader.result;
        console.log("Selected file "+ this.selectedFile)
      };
    }
  }

}
