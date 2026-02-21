import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CifrarService } from '../../service/cifrar.service';

@Component({
  selector: 'app-formulario-cifrado',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-cifrado.component.html',
  styleUrl: './formulario-cifrado.component.css',
})
export class FormularioCifradoComponent {

  form: FormGroup;
  resultado: string = '';

  //sección 1.1
  constructor(private fb: FormBuilder, private service: CifrarService) {
    this.form = this.fb.group({
      modulo: ['CESAR', Validators.required],
      operacion: ['CIFRAR', Validators.required],
      alfabeto: ['ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', Validators.required],
      desplazamiento: [3, [Validators.min(1)]],
      mensaje: ['', Validators.required]
    });
  }

  //sección 1.2
  ejecutar() {
    const { modulo, operacion, alfabeto, desplazamiento, mensaje } = this.form.value;
    const esCifrado = operacion === 'CIFRAR';

    if (modulo === 'CESAR') {
      this.resultado = this.service.procesar1(mensaje, alfabeto, desplazamiento, esCifrado);
    } else {
      this.resultado = this.service.procesar2(mensaje, alfabeto);
    }
  }
}
