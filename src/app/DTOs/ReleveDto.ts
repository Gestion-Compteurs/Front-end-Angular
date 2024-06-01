import {ReleveCadranDto} from "./ReleveCadranDto";

interface ReleveDto {
  releveId: number,
  instanceCompteurId: number,
  agentId: number,
  dateReleve: Date,
  releveCadrans: ReleveCadranDto[]
}

interface ajouterReleveDto {
  instanceCompteurId: number,
  operateurId: number,
}

interface confirmerAjoutReleveDto {
  releveId: number,
  releveCadrans : ReleveCadranDto[]
}

interface modifierReleveDto  {
  releveId: number,
  dateReleve: Date,
  instanceCompteurId: number,
  operateurId: number
}

export {
  ReleveDto,
  ajouterReleveDto,
  confirmerAjoutReleveDto,
  modifierReleveDto
}
