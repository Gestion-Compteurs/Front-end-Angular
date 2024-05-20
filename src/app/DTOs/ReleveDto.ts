import {ReleveCadranDto} from "./ReleveCadranDto";

interface ReleveDto {
  releveId: number,
  instanceCompteurId: number,
  agentId: number,
  dateReleve: Date,
  releveCadrans: ReleveCadranDto[]
}

interface RegisterReleveDto {
  releveId: number,
  instanceCompteurId: number,
  agentId: number,
  dateReleve: Date,
  releveCadrans: []
}

export {
  ReleveDto,
  RegisterReleveDto
}
