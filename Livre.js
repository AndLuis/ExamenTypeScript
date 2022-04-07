"use strict";
exports.__esModule = true;
exports.Livre = void 0;
var Livre = /** @class */ (function () {
    function Livre(idLivre, nomLivre, edition, auteur) {
        this.idLivre = idLivre;
        this.nomLivre = nomLivre;
        this.edition = (edition);
        this.auteur = (auteur);
    }
    Livre.prototype.setidLivre = function (idLivre) { this.idLivre = idLivre; };
    Livre.prototype.getidLivre = function () { return this.idLivre; };
    Livre.prototype.setnomLivree = function (nomLivre) { this.nomLivre = nomLivre; };
    Livre.prototype.getnomLivre = function () { return this.nomLivre; };
    return Livre;
}()); //Livre
exports.Livre = Livre;
