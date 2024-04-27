import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Observable} from "rxjs";
import {RegisterAgentDeTerrainDto} from "../../DTOs/AgentDeTerrainDto";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  // L'agent à enregistrer
  agent$ :RegisterAgentDeTerrainDto = {
    nom: "",
    prenom: "",
    cin: "",
    email: "",
    dateDeNaissance: new Date(),
    password: "",
  }
  // Sa photo
  selectedFile: string | ArrayBuffer | null = null;
  registerAgentDeTerrain(): void{
    // Fonction pour enregistrer un agent de terrain
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
