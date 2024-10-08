import {ReleveDto} from "./ReleveDto";

interface RegisterAgentDeTerrainRequestDto {
  nom: string;
  prenom: string;
  regieId: number;
  cin: string;
  dateDeNaissance: Date | string;
  civilite: string;
  dateEmbauche: Date | string;
}

interface RegisterAgentDeTerrainResponseDto {
  nom: string;
  prenom: string;
  regieId: number;
  cin: string;
  dateDeNaissance: Date | string;
  civilite: string;
  dateEmbauche: Date | string;
}

interface RechercherAgentDeTerrainResponseDto {
  operateurId: number,
  nom: string;
  prenom: string;
  regieId: number;
  cin: string;
  dateDeNaissance: Date | string;
  civilite: string;
  dateEmbauche: Date | string;
  releves: ReleveDto[]
}

interface ListerAgentDeTerrainResponseDto {
  operateurId : number,
  nom: string;
  prenom: string;
  regieId: number;
  cin: string;
  dateDeNaissance: Date | string;
  civilite: string;
  dateEmbauche: Date | string;
}

interface ModifierAgentDeTerrainResponseDto {
  nom: string;
  prenom: string;
  regieId: number;
  cin: string;
  dateDeNaissance: Date | string;
  civilite: string;
  dateEmbauche: Date | string;
}


export {
  RegisterAgentDeTerrainRequestDto,
  RegisterAgentDeTerrainResponseDto,
  RechercherAgentDeTerrainResponseDto,
  ListerAgentDeTerrainResponseDto,
  ModifierAgentDeTerrainResponseDto
}
