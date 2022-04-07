import { Livre } from "./Livre";

export class Auteur{
    private idAuteur: string;
    private nomAuteur: string;
    private livres:Livre[] = [];

    constructor(idAuteur: string, nomAuteur: string,livres: Livre){
        this.idAuteur = idAuteur;
        this.nomAuteur = nomAuteur;
        this.livres.push(livres);
    }
    setidAuteur(idAuteur:string):void{this.idAuteur = idAuteur; }
    getidAuteur(): string{return this.idAuteur;}

    setnomAuteur(nomAuteur:string):void{this.nomAuteur =nomAuteur; }
    getsnomAuteur(): string{return this.nomAuteur;}

    addLivre(livres: Livre): void { 
        this.livres.push(livres);
    }
}//Auteur