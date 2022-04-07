"use strict";
exports.__esModule = true;
exports.Auteur = void 0;
var Auteur = /** @class */ (function () {
    function Auteur(idAuteur, nomAuteur, livres) {
        this.livres = [];
        this.idAuteur = idAuteur;
        this.nomAuteur = nomAuteur;
        this.livres.push(livres);
    }
    Auteur.prototype.setidAuteur = function (idAuteur) { this.idAuteur = idAuteur; };
    Auteur.prototype.getidAuteur = function () { return this.idAuteur; };
    Auteur.prototype.setnomAuteur = function (nomAuteur) { this.nomAuteur = nomAuteur; };
    Auteur.prototype.getsnomAuteur = function () { return this.nomAuteur; };
    Auteur.prototype.addLivre = function (livres) {
        this.livres.push(livres);
    };
    return Auteur;
}()); //Auteur
exports.Auteur = Auteur;
