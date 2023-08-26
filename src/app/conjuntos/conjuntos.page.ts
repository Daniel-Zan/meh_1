import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-conjuntos',
  templateUrl: './conjuntos.page.html',
  styleUrls: ['./conjuntos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConjuntosPage {

  conjuntoA: string = '';
  conjuntoB: string = '';
  operacion: string = '';
  resultado: string = '';

  realizarOperacion() {
    const setA = new Set(this.conjuntoA.split(',').map(item => parseInt(item.trim(), 10)));
    const setB = new Set(this.conjuntoB.split(',').map(item => parseInt(item.trim(), 10)));

    if (this.operacion === 'interseccion') {
      this.resultado = Array.from(new Set([...setA].filter(x => setB.has(x)))).join(', ');
    } else if (this.operacion === 'union') {
      this.resultado = Array.from(new Set([...setA, ...setB])).join(', ');
    } else if (this.operacion === 'aNoPerteneceAB') {
      this.resultado = Array.from(new Set([...setA].filter(x => !setB.has(x)))).join(', ');
    } else if (this.operacion === 'bNoPerteneceAA') {
      this.resultado = Array.from(new Set([...setB].filter(x => !setA.has(x)))).join(', ');
    }
  }
}