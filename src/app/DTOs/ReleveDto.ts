import {InstanceCadranDto} from "./InstanceCadranDto";

interface ReleveDto {
  releveId: number,
  compteurId: number|null,
  batimentId: number|null,
  agentId: number|null,
  dateReleve: Date,
  releveCadrans: InstanceCadranDto[]
}

interface RegisterReleveDto {
  releveId: number,
  compteurId: number|null,
  batimentId: number|null,
  agentId: number|null,
  dateReleve: Date,
  releveCadrans: []
}

export {
  ReleveDto,
  RegisterReleveDto
}
