import {Auteur } from "./Auteur";
import {Livre} from "./Livre";
export class Edition {
    private idEdition: string;
    private nomEdition: string;
  

    constructor(idEdition: string, nomEdition: string,  ){
        this.idEdition = idEdition;
        this.nomEdition = nomEdition;
   
    }
    setidEdition(idEdition:string):void{this.idEdition = idEdition; }
    getidEdition(): string{return this.idEdition;}

    setnomEdition(nomEdition:string):void{this.nomEdition =nomEdition; }
    getnomEdition(): string{return this.nomEdition;}

}//Edition