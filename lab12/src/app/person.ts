import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Person } from './person.model';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = 'http://localhost:8080/api/persons';

  constructor(private http: HttpClient) {}
  getAll(): Observable<Person[]> {
    console.log('GET', this.apiUrl);
    return this.http.get<Person[]>(this.apiUrl);
  }

  getById(id: number): Observable<Person> {
    console.log('GET', `${this.apiUrl}/${id}`);
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  add(person: Person): Observable<Person> {
    console.log('POST', this.apiUrl, person);
    return this.http.post<Person>(this.apiUrl, person);
  }

  update(id: number, person: Person): Observable<Person> {
    console.log('PUT', `${this.apiUrl}/${id}`, person);
    return this.http.put<Person>(`${this.apiUrl}/${id}`, person);
  }

  delete(id: number): Observable<void> {
    console.log('DELETE', `${this.apiUrl}/${id}`);
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
