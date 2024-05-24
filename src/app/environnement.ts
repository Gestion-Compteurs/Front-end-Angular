// La racine de toutes les adresses du serveur backend
const addressRoot:string = `https://localhost:7058/api`
// La racine de toutes les adresses des requêtes sur les bâtiments
const batimentsServiceAddress = `${addressRoot}/Batiment`
// La racine de toutes les adresses des requêtes sur les cadrans
const cadransServiceAddress = `${addressRoot}/Cadran`
// La racine de toutes les adresses des requêtes sur les compteurs$
const compteursServiceAddress = `${addressRoot}/Compteur`
// La racine de toutes les adresses des requêtes sur les instances cadrans
const instancesCadransServiceAddress = `${addressRoot}/InstanceCadran`
// La racine de toutes les adresses des requêtes sur les instances compteurs$
const instancesCompteursServiceAddress = `${addressRoot}/instanceCompteur`
// La racine de toutes les adresses des requêtes sur les instances relèves
const relevesServiceAddress = `${addressRoot}/Releve`
// La racine de toutes les adresses des requêtes sur les instances relèves cadran
const relevesCadransServiceAddress = `${addressRoot}/ReleveCadran`

export {
  addressRoot,
  batimentsServiceAddress,
  cadransServiceAddress,
  compteursServiceAddress,
  instancesCadransServiceAddress,
  instancesCompteursServiceAddress,
  relevesServiceAddress,
  relevesCadransServiceAddress,
}
