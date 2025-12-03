import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomService } from '../random';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random.html',
  styleUrls: ['./random.css'],
})
export class RandomComponent {
  // max dostarczane z zewnątrz przez [max]="..."
  @Input() max: number = 10;

  currentNumber: number | null = null;
  comment: string = '';
  isLow: boolean | null = null; // true = zielony, false = czerwony

  constructor(private randomService: RandomService) {}

  generateRandom(): void {
    this.currentNumber = this.randomService.getRandomNumber(this.max);

    if (this.currentNumber <= 0.5 * this.max) {
      this.comment = `Liczba ${this.currentNumber} jest mniejsza lub równa połowie maksimum (${this.max}).`;
      this.isLow = true;
    } else {
      this.comment = `Liczba ${this.currentNumber} jest większa niż połowa maksimum (${this.max}).`;
      this.isLow = false;
    }
  }
}
