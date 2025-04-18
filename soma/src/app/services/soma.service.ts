import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomaService {

  constructor() { }

  somar (numero1:number, numbero2:number) : number{
    let resultado : number;
    resultado = numero1 + numbero2;
    return resultado
  }
}
