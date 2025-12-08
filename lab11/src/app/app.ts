import { Component } from '@angular/core';
import { RandomComponent } from './random/random';
import { ListComponent } from './list/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RandomComponent, ListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  message: string = 'Martyna.';
}
