import { Component } from '@angular/core';
import { DivisaoService } from '../../services';

@Component({
  selector: 'app-divisao',
  standalone: true, 
  imports: [],
  templateUrl: './divisao.component.html',
  styleUrl: './divisao.component.css'
})
export class DivisaoComponent {
  private res : number = 0;

  constructor(private divisaoService : DivisaoService){}

  dividir(number1:string, number2:string):void{
    let n1:number;
    let n2:number;
    n1 = parseFloat(number1);
    n2 = parseFloat(number2);
    this.res = this.divisaoService.dividir(n1,n2)
  }

  get resultado():string{
    return this.res.toString();
  }

}
