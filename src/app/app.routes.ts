import { Routes } from '@angular/router';
import { ShowMessage } from './components/show-message/show-message';
import { CreateMessage } from './components/create-message/create-message';

export const routes: Routes = [
  // Ruta para tu tabla
  { path: 'ShowMessage', component: ShowMessage },
  // Ruta para tu formulario
  { path: 'CreateMessage', component: CreateMessage },
  // Si entras a localhost:4200 sin nada, te manda a la tabla por defecto
  { path: '', redirectTo: 'ShowMessage', pathMatch: 'full' }
];