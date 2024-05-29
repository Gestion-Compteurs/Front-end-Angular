// La racine de toutes les adresses du serveur backend
const addressRoot:string = `https://localhost:7058/api`
// La racine de toutes les adresses des requêtes sur l'identity controller
const identityServiceAddress = `${addressRoot}/Identity`
// La racine de toutes les adresses des requêtes sur les régies
const regieServiceAddress = `${addressRoot}/Regie`
// La racine de toutes les adresses des requêtes sur les agents de terrain
const agentsServiceAddress = `${addressRoot}/Operateur`
// La racine de toutes les adresses des requêtes sur les administrateurs
const administrateurServiceAddress = `${addressRoot}/Administrateur`
// La racine de toutes les adresses des requêtes sur les bâtiments
const batimentsServiceAddress = `${addressRoot}/Batiment`
// La racine de toutes les adresses des requêtes sur les cadrans
const cadransServiceAddress = `${addressRoot}/Cadran`
// La racine de toutes les adresses des requêtes sur les compteurs
const compteursServiceAddress = `${addressRoot}/Compteur`
// La racine de toutes les adresses des requêtes sur les instances cadrans
const instancesCadransServiceAddress = `${addressRoot}/InstanceCadran`
// La racine de toutes les adresses des requêtes sur les instances compteurs
const instancesCompteursServiceAddress = `${addressRoot}/instanceCompteur`
// La racine de toutes les adresses des requêtes sur les instances relèves
const relevesServiceAddress = `${addressRoot}/Releve`
// La racine de toutes les adresses des requêtes sur les instances relèves cadran
const relevesCadransServiceAddress = `${addressRoot}/ReleveCadran`

export {
  addressRoot,
  identityServiceAddress,
  regieServiceAddress,
  administrateurServiceAddress,
  agentsServiceAddress,
  batimentsServiceAddress,
  cadransServiceAddress,
  compteursServiceAddress,
  instancesCadransServiceAddress,
  instancesCompteursServiceAddress,
  relevesServiceAddress,
  relevesCadransServiceAddress,
}
