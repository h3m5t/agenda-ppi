import { Component } from '@angular/core';
import { Contato } from './contato';
import { TipoContato } from './tipoContato';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-add-contato',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-contato.html',
  styleUrl: './add-contato.css'
})
export class AddContato {
  contatos: Contato[] = [];

  nome: string = '';
  telefone: string = '';
  email: string = '';
  tipoContato: TipoContato | undefined; 
  aniversario: string = ''; 

  tiposDisponiveis: TipoContato[] = [
    TipoContato.AMIGO,
    TipoContato.FAMILIA,
    TipoContato.TRABALHO
  ];

  constructor(){
    this.contatos = [];
  }

  adicionarContato(){

    const dataAniversarioConvertida = this.aniversario ? new Date(this.aniversario) : undefined;

    const NovoContato = new Contato(
      this.nome,
      this.telefone,
      this.email,
      dataAniversarioConvertida, 
      this.tipoContato 
    );

    this.contatos.push(NovoContato);

    this.nome = '';
    this.telefone = '';
    this.email = '';
    this.tipoContato = undefined;
    this.aniversario = ''; 
  }
}