import { Component } from '@angular/core';
import { AddContato } from "./add-contato/add-contato";
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  imports: [AddContato,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'agenda';
}
