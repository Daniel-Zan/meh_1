import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-factous',
  templateUrl: './factous.page.html',
  styleUrls: ['./factous.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FactousPage{
  numero: number = 0;
  resultadoFactorial: number= 0;

  calcularFactorial() {
    this.resultadoFactorial = this.factorial(this.numero);
  }

  factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }
}