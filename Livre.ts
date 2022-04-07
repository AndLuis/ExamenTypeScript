import {Auteur } from "./Auteur";
import { Edition } from "./Edition";

export class Livre{
    private idLivre: string;
    private nomLivre: string;
    private edition:Edition;
    private auteur:Auteur;

    constructor(idLivre: string, nomLivre: string, edition: Edition, auteur:Auteur ){
        this.idLivre = idLivre;
        this.nomLivre = nomLivre;
        this.edition =(edition);
        this.auteur =(auteur);
   
    }
    setidLivre(idLivre:string):void{this.idLivre = idLivre; }
    getidLivre(): string{return this.idLivre;}

    setnomLivree(nomLivre:string):void{this.nomLivre =nomLivre; }
    getnomLivre(): string{return this.nomLivre;}

}//Livre