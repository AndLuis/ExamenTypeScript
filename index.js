"use strict";
exports.__esModule = true;
var Auteur_1 = require("./Auteur");
var Edition_1 = require("./Edition");
var Livre_1 = require("./Livre");
//4 Editions
var edition1 = new Edition_1.Edition('id1', 'NomEdition1');
var edition2 = new Edition_1.Edition('id2', 'NomEdition2');
var edition3 = new Edition_1.Edition('id3', 'NomEdition3');
var edition4 = new Edition_1.Edition('id4', 'NomEdition4');
var editionA = [edition1, edition2, edition3, edition4];
for (var _i = 0, editionA_1 = editionA; _i < editionA_1.length; _i++) {
    var iterator = editionA_1[_i];
    console.log(iterator);
}
//8 
var auteur1 = new Auteur_1.Auteur('idAuteur1', 'nomAuteur1', new Livre_1.Livre('idLivre1', 'nomLivre1', edition1, unknown));
var auteur2 = new Auteur_1.Auteur('idAuteur2', 'nomAuteur2', new Livre_1.Livre('idLivre2', 'nomLivre2', edition2, auteur1));
var auteur3 = new Auteur_1.Auteur('idAuteur3', 'nomAuteur3', new Livre_1.Livre('idLivre3', 'nomLivre3', edition3, auteur2));
var auteur4 = new Auteur_1.Auteur('idAuteur4', 'nomAuteur4', new Livre_1.Livre('idLivre4', 'nomLivre4', edition4, auteur3));
var auteur5 = new Auteur_1.Auteur('idAuteur5', 'nomAuteur5', new Livre_1.Livre('idLivre5', 'nomLivre5', edition1, auteur4));
var auteur6 = new Auteur_1.Auteur('idAuteur6', 'nomAuteur6', new Livre_1.Livre('idLivre6', 'nomLivre6', edition2, auteur5));
var auteur7 = new Auteur_1.Auteur('idAuteur7', 'nomAuteur7', new Livre_1.Livre('idLivre7', 'nomLivre7', edition3, auteur6));
var auteur8 = new Auteur_1.Auteur('idAuteur8', 'nomAuteur8', new Livre_1.Livre('idLivre8', 'nomLivre8', edition4, auteur3));
var auteurA = [auteur1, auteur2, auteur3, auteur4,
    auteur5, auteur6, auteur7, auteur8];
for (var _a = 0, auteurA_1 = auteurA; _a < auteurA_1.length; _a++) {
    var iterator2 = auteurA_1[_a];
    console.log(iterator2);
}
var livre1 = new Livre_1.Livre('livre1', 'nomLivre1', edition1, auteur1);
var livre2 = new Livre_1.Livre('livre2', 'nomLivre2', edition2, auteur2);
var livre3 = new Livre_1.Livre('livre3', 'nomLivre3', edition3, auteur3);
var livre4 = new Livre_1.Livre('livre4', 'nomLivre4', edition4, auteur4);
var livre5 = new Livre_1.Livre('livre5', 'nomLivre5', edition1, auteur5);
var livre6 = new Livre_1.Livre('livre6', 'nomLivre6', edition2, auteur6);
var livre7 = new Livre_1.Livre('livre7', 'nomLivre7', edition3, auteur7);
var livre8 = new Livre_1.Livre('livre8', 'nomLivre8', edition4, auteur8);
var livreA = [livre1, livre2, livre3, livre4,
    livre5, livre6, livre7, livre8];
for (var _b = 0, livreA_1 = livreA; _b < livreA_1.length; _b++) {
    var iterator3 = livreA_1[_b];
    console.log(iterator3);
}
