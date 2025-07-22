
import { TipoContato } from "./tipoContato"

export class Contato {
  
    nome: string;
    telefone: string;
    email: string;
    aniversario?: Date | undefined; 
    tipo?: TipoContato;

   
    constructor(nm:string, tel:string, email:string, ani:Date | undefined, tipo: TipoContato | undefined){
    
        this.nome = nm;
        this.telefone = tel;
        this.email = email;
        this.aniversario = ani;
        this.tipo = tipo; 
}
}