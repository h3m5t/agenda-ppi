import { Component } from '@angular/core';
import { AddContato } from "./add-contato/add-contato";

@Component({
  selector: 'app-root',
  imports: [AddContato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'agenda';
}
