import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-primos',
  templateUrl: './primos.page.html',
  styleUrls: ['./primos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PrimosPage {
  numero: number = 0;
  primos: number[] = [];

  calcularPrimos() {
    this.primos = this.calcularNumerosPrimos(this.numero);
  }

  calcularNumerosPrimos(n: number): number[] {
    const primos: number[] = [];

    for (let i = 2; i <= n; i++) {
      let esPrimo = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          esPrimo = false;
          break;
        }
      }
      if (esPrimo) {
        primos.push(i);
      }
    }

    return primos;
  }
}
