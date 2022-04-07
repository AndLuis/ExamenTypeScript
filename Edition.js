"use strict";
exports.__esModule = true;
exports.Edition = void 0;
var Edition = /** @class */ (function () {
    function Edition(idEdition, nomEdition) {
        this.idEdition = idEdition;
        this.nomEdition = nomEdition;
    }
    Edition.prototype.setidEdition = function (idEdition) { this.idEdition = idEdition; };
    Edition.prototype.getidEdition = function () { return this.idEdition; };
    Edition.prototype.setnomEdition = function (nomEdition) { this.nomEdition = nomEdition; };
    Edition.prototype.getnomEdition = function () { return this.nomEdition; };
    return Edition;
}()); //Edition
exports.Edition = Edition;
