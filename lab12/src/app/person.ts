import { Injectable } from '@angular/core';
import { Person } from './person.model';

const STORAGE_KEY = 'persons';

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  getAll(): Person[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? (JSON.parse(data) as Person[]) : [];
  }

  getByIndex(index: number): Person | null {
    const persons = this.getAll();
    if (index < 0 || index >= persons.length) return null;
    return persons[index];
  }

  addPerson(person: Person): void {
    const persons = this.getAll();
    persons.push(person);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persons));
  }

  deleteByIndex(index: number): void {
    const persons = this.getAll();
    if (index < 0 || index >= persons.length) return;
    persons.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persons));
  }
}
