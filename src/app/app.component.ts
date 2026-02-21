import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioCifradoComponent } from "./components/formulario-cifrado/formulario-cifrado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioCifradoComponent, FormularioCifradoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cifrados';
}
