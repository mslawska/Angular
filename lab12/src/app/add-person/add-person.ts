import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../person.model';
import { PersonService } from '../person';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-person.html',
  styleUrl: './add-person.css',
})
export class AddPersonComponent {
  person: Person = {
    address: {},
  };

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  save(): void {
    this.personService.addPerson(this.person);
    this.person = { address: {} }; // wyczyszczenie formularza
    this.router.navigate(['']);   // powrót na listę
  }
}
