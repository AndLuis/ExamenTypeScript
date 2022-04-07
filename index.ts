import {Auteur } from "./Auteur";
import { Edition } from "./Edition";
import {Livre} from "./Livre";
//4 Editions
let edition1 = new Edition('id1','NomEdition1');
let edition2 = new Edition('id2','NomEdition2');
let edition3 = new Edition('id3','NomEdition3');
let edition4 = new Edition('id4','NomEdition4');
const editionA = [edition1, edition2, edition3, edition4];
for (const iterator of editionA) {
    console.log(iterator); 
}

//8 
var auteur1 = new Auteur('idAuteur1', 'nomAuteur1',new Livre('idLivre1', 'nomLivre1', edition1, auteur1));
var auteur2 = new Auteur('idAuteur2', 'nomAuteur2',new Livre('idLivre2', 'nomLivre2', edition2, auteur1));
var auteur3 = new Auteur('idAuteur3', 'nomAuteur3',new Livre('idLivre3', 'nomLivre3', edition3, auteur2));
var auteur4 = new Auteur('idAuteur4', 'nomAuteur4',new Livre('idLivre4', 'nomLivre4', edition4, auteur3));
var auteur5 = new Auteur('idAuteur5', 'nomAuteur5',new Livre('idLivre5', 'nomLivre5', edition1, auteur4));
var auteur6 = new Auteur('idAuteur6', 'nomAuteur6',new Livre('idLivre6', 'nomLivre6', edition2, auteur5));
var auteur7 = new Auteur('idAuteur7', 'nomAuteur7',new Livre('idLivre7', 'nomLivre7', edition3, auteur6));
var auteur8 = new Auteur('idAuteur8', 'nomAuteur8',new Livre('idLivre8', 'nomLivre8', edition4, auteur3));
 const auteurA = [auteur1, auteur2, auteur3, auteur4, 
    auteur5, auteur6, auteur7, auteur8];
    for (const iterator2 of auteurA) {
        console.log(iterator2);
    }

 var livre1 = new Livre('livre1', 'nomLivre1', edition1, auteur1);
 var livre2 = new Livre('livre2', 'nomLivre2', edition2, auteur2);
 var livre3 = new Livre('livre3', 'nomLivre3', edition3, auteur3);
 var livre4 = new Livre('livre4', 'nomLivre4', edition4, auteur4);
 var livre5 = new Livre('livre5', 'nomLivre5', edition1, auteur5);
 var livre6 = new Livre('livre6', 'nomLivre6', edition2, auteur6);
 var livre7 = new Livre('livre7', 'nomLivre7', edition3, auteur7);
 var livre8 = new Livre('livre8', 'nomLivre8', edition4, auteur8);

 const  livreA = [livre1, livre2, livre3, livre4, 
    livre5, livre6, livre7,livre8];
    for (const iterator3 of livreA) {
        console.log(iterator3);
    }