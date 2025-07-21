import { Component } from '@angular/core';
import { Contato } from './contato';
import { TipoContato } from './tipoContato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-contato',
  imports: [CommonModule],
  templateUrl: './add-contato.html',
  styleUrl: './add-contato.css'
})
export class AddContato {
    contatos: Contato[]


    constructor(){
      this.contatos = []
    }

    adicionar(nm: string,tel: string,email:string,tipo: TipoContato,ani:Date){
      let n = nm
      let te = tel
      let e = email
      let t = tipo
      let a = new Date(ani)
      const Cont = new Contato(n,te,e,a,t)
    }
}


