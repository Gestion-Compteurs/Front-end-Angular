import {ReleveDto} from "./ReleveDto";
import {InstanceCadranDto} from "./InstanceCadranDto";

interface InstanceCompteurDto {
  instanceCompteurId : number,
  batimentId : number,
  compteurId: number,
  dateInstallation : Date,
  instanceCadrans: InstanceCadranDto,
  releves: ReleveDto
}

export {
  InstanceCompteurDto
}
