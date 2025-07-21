import { TipoContato } from "./tipoContato"

export class Contato {
    Nome: string
    Telefone: string
    Email: string
    Aniversario: Date
    Tipo: TipoContato

    constructor(nm:string,tel:string,email:string,ani:Date,tipo: TipoContato){
        this.Nome = nm,
        this.Telefone = tel
        this.Email = email
        this.Aniversario = ani
        this.Tipo = tipo

    }

}