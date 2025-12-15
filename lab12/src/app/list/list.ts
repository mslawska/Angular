import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PersonService } from '../person';     
import { Person } from '../person.model';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class ListComponent implements OnInit {

  persons: Person[] = [];
  error?: string;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getAll().subscribe({
      next: (data) => {
        this.persons = data;
        console.log('GET /persons =>', data);
      },
      error: (err) => console.error(err)
    });
  }
  
  load(): void {
    this.personService.getAll().subscribe({
      next: (data) => {
        console.log('Dane z backendu:', data);  // możesz podejrzeć w konsoli
        this.persons = data;
        this.error = undefined;
      },
      error: (err) => {
        console.error('Błąd pobierania listy osób', err);
        this.error = 'Błąd podczas wczytywania danych z serwera.';
      }
    });
  }

  delete(id?: number): void {
    if (id == null) {
      return;
    }

    this.personService.delete(id).subscribe({
      next: () => this.load(),
      error: (err) => {
        console.error('Błąd usuwania osoby', err);
        this.error = 'Nie udało się usunąć osoby.';
      }
    });
  }
}