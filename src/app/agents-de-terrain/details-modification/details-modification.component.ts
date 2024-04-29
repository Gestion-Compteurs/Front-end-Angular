import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RegisterAgentDeTerrainDto} from "../../DTOs/AgentDeTerrainDto";
import {RouterLink} from "@angular/router";
import {CustomNavbarComponent} from "../../components/custom-navbar/custom-navbar.component";

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
    // Retrouver l'agent en question

  }
  // L'agent à modifier
  agent$ :RegisterAgentDeTerrainDto = {
    agentId: 0,
    nom: "",
    prenom: "",
    cin: "",
    email: "",
    dateDeNaissance: new Date(),
    civilite: "",
    dateEmbauche: new Date(),
    password: "",
  }
  // Sa photo
  selectedFile: string | ArrayBuffer | null = null;
  updateAgentDeTerrain(): void{
    // Fonction pour modifier un agent de terrain
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
