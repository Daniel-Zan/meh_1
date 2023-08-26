import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private router: Router) {}

  irAFibonacci() {
    this.router.navigateByUrl('/fibonacci');
  }
  irAFactous() {
    this.router.navigateByUrl('/factous');
  }
  irAPrimos() {
    this.router.navigateByUrl('/primos');
  }
  irAPares() {
    this.router.navigateByUrl('/pares-impares');
  }
  irAConjuntos(){
    this.router.navigateByUrl('/conjuntos');
  }
}
