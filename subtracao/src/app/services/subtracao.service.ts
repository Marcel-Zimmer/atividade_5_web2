import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubtracaoService {

  constructor() { }

  subtracao(numero1: number, numero2:number){
    let resultado : number;
    resultado = numero1 - numero2;
    return resultado;
  }
}
