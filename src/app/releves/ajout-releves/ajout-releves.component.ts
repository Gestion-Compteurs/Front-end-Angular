import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RegisterAgentDeTerrainDto} from "../../DTOs/AgentDeTerrainDto";
import {RegisterReleveDto} from "../../DTOs/RegisterReleveDto";

@Component({
  selector: 'app-ajout-releves',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage,
    NgIf],
  templateUrl: './ajout-releves.component.html',
  styleUrl: './ajout-releves.component.css'
})
export class AjoutRelevesComponent {
  // La rélève à enregistrer
  releve$ :RegisterReleveDto = {
    releveId: 0,
    compteurId: 0,
    batimentId: 0,
    agentId: 0,
    dateReleve: new Date(),
  }
  // photo de rélève
  selectedFile: string | ArrayBuffer | null = null;
  registerReleve(): void{
    // Fonction pour enregistrer une rélève
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
