import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.page.html',
  styleUrls: ['./fibonacci.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FibonacciPage {
  FibonacciSalto: number = 0;
  resultadoFibonacci: string = 'empty';
  
  calcularFibonacci() {
    if (this.FibonacciSalto <= 0) {
      this.resultadoFibonacci = 'Mayor que 0';
      return;
    }

    let fibonacci = [0, 1];
    for (let i = 2; i < this.FibonacciSalto; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    this.resultadoFibonacci = fibonacci.join(', ');
  }


}
