import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
})
export class ListComponent {
  newItem: string = '';
  items: string[] = [];

  addItem(): void {
    const trimmed = this.newItem.trim();
    if (trimmed.length === 0) {
      return;
    }
    this.items.push(trimmed);
    this.newItem = '';
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}
