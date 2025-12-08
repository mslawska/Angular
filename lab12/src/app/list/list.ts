import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PersonService } from '../person';
import { Person } from '../person.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class ListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    this.persons = this.personService.getAll();
  }

  delete(index: number): void {
    this.personService.deleteByIndex(index);
    this.loadPersons();
  }
}
