import { Routes } from '@angular/router';
import { ListComponent } from './list/list';
import { DetailsComponent } from './details/details';
import { AddPersonComponent } from './add-person/add-person';
import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: ListComponent },                 // lista osób
  { path: 'details/:id', component: DetailsComponent },   // szczegóły po indeksie
  { path: 'add', component: AddPersonComponent },         // dodawanie osoby
  { path: '**', component: NotFoundComponent },           // nieznana ścieżka
];
