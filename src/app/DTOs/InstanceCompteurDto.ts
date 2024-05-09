import {ReleveCadranDto} from "./ReleveCadranDto";

interface InstanceCompteurDto {
  instanceCompteurId : number,
  batimentId : number,
  compteurId: number,
  dateInstallation : Date,
  relevesCadrans : ReleveCadranDto[]
}

export {
  InstanceCompteurDto
}
