import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pares-impares',
  templateUrl: './pares-impares.page.html',
  styleUrls: ['./pares-impares.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ParesImparesPage{
  numero: number = 0;
  resultados: number[] = [];

  calcularPares() {
    this.resultados = this.calcularNumerosPares(this.numero);
  }

  calcularImpares() {
    this.resultados = this.calcularNumerosImpares(this.numero);
  }

  calcularNumerosPares(n: number): number[] {
    const pares: number[] = [];

    for (let i = 2; i <= n; i += 2) {
      pares.push(i);
    }

    return pares;
  }

  calcularNumerosImpares(n: number): number[] {
    const impares: number[] = [];

    for (let i = 1; i <= n; i += 2) {
      impares.push(i);
    }

    return impares;
  }
}