interface ReleveCadranDto {
  releveCadranId: number,
  releveId: number
  instanceCadranId : number,
  prixWatt: number,
  indexRoues: number,
}

interface modifierReleveCadranDto {
  releveCadranId: number,
  indexRoues: number,
  prixWatt: number
}

export {
  ReleveCadranDto,
  modifierReleveCadranDto
}
