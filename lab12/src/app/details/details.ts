import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonService } from '../person';
import { Person } from '../person.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class DetailsComponent implements OnInit, OnDestroy {
  person: Person | null = null;
  private sub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      const index = idParam ? Number(idParam) : NaN;

      if (!isNaN(index)) {
        this.person = this.personService.getByIndex(index);
      } else {
        this.person = null;
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
