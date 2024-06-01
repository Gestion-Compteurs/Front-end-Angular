import {ReleveDto} from "./ReleveDto";
import {InstanceCadranDto} from "./InstanceCadranDto";

interface InstanceCompteurDto {
  instanceCompteurId : number,
  batimentId : number,
  compteurId: number,
  dateInstallation : Date,
  instanceCadrans: InstanceCadranDto[],
  releves: ReleveDto[]
}

interface AjouterInstanceCompteurDto {
  batimentId: number,
  compteurId: number,
  dateInstallation: string
}

export {
  AjouterInstanceCompteurDto,
  InstanceCompteurDto
}
