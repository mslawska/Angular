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
      const id = idParam ? Number(idParam) : NaN;
    
      if (isNaN(id)) {
        this.person = null;
        return;
      }
    
      this.personService.getById(id).subscribe({
        next: (p) => this.person = p,
        error: () => this.person = null // np. 404
      });
    });
    
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
