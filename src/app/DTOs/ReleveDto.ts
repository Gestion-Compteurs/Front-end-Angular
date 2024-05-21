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
  releveCadranDtos : ReleveCadranDto[]
}

export {
  ReleveDto,
  ajouterReleveDto,
  confirmerAjoutReleveDto
}
