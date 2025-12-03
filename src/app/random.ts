import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  getRandomNumber(max: number): number {
    if (max <= 0) return 0;
    return Math.floor(Math.random() * max) + 1;
  }
}
