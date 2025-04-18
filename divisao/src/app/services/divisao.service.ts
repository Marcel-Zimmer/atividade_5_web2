import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivisaoService {

  constructor() { }

  dividir(number1:number, number2:number):number{
    let resultado : number;
    resultado = number1/number2;
    return resultado;
  }
}
