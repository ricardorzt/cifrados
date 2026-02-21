import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CifrarService {
  

  procesarCesar(mensaje: string, alfabeto: string, desplazamiento: number, cifrar: boolean): string {
    const L = alfabeto.length;

    // ajuste negativos
    const shift = cifrar ? desplazamiento : -desplazamiento;
    
    return mensaje.split('').map(char => {
      const index = alfabeto.indexOf(char);
      if (index === -1) return char;
      
      // loop
      let nuevoIndex = (index + shift) % L;
      if (nuevoIndex < 0) nuevoIndex += L;
      
      return alfabeto[nuevoIndex];
    }).join('');
  }

  procesarAtbash(mensaje: string, alfabeto: string): string {
    const L = alfabeto.length;
    return mensaje.split('').map(char => {
      const index = alfabeto.indexOf(char);
      if (index === -1) return char;
      return alfabeto[(L - 1) - index];
    }).join('');
  }
  
}
