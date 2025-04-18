import { Component } from '@angular/core';
import { SomaService } from '../../services';

@Component({
  selector: 'app-soma',
  standalone : true, 
  imports: [],
  templateUrl: './soma.component.html',
  styleUrl: './soma.component.css'
})
export class SomaComponent {
  private res :number = 0;

  constructor(private somaSerives:SomaService){
  }

  somarBotao(numero1:string, numero2 : string){
    let n1:number;
    let n2:number;
    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.somaSerives.somar(n1,n2);
  }

  get resultado():string{
    return this.res.toString();
  }

}
