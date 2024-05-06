import {InstanceCadranDto} from "./InstanceCadranDto";

interface ReleveDto {
  releveId: number,
  compteurId: number,
  batimentId: number,
  agentId: number,
  dateReleve: Date,
  releveCadrans: InstanceCadranDto[]
}

interface RegisterReleveDto {
  releveId: number,
  compteurId: number,
  batimentId: number,
  agentId: number,
  dateReleve: Date,
  releveCadrans: []
}

export {
  ReleveDto,
  RegisterReleveDto
}
