import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { FibonacciPage } from './fibonacci/fibonacci.page';
import { FactousPage } from './factous/factous.page';
import { PrimosPage } from './primos/primos.page';
import { ParesImparesPage } from './pares-impares/pares-impares.page';
import { ConjuntosPage } from './conjuntos/conjuntos.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'fibonacci',
    component: FibonacciPage,
  },
  {
    path: 'factous',
    component: FactousPage,
  },
  {
    path: 'primos',
    component: PrimosPage,
  },
  {
    path: 'pares-impares',
    component: ParesImparesPage,
  },
  {
    path: 'conjuntos',
    component: ConjuntosPage,
    },
];