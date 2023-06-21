// installing Angular CLI globally
npm install -g @angular/cli

// creating a new Angular project named "item-manager"
ng new item-manager

// navigating into the newly created project directory
cd item-manager

// generating a new component named "items"
ng generate component items
// Importing the necessary libraries
import { Component, OnInit } from '@angular/core';

// Component declaration
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  // An array to store items
  items: Array<string> = ['Item 1', 'Item 2', 'Item 3'];
  newItem: string = '';

  // Default constructor
  constructor() { }

  // Lifecycle hook that is called after data-bound properties of a directive are initialized
  ngOnInit(): void {
  }

  // Method to add a new item to the items array
  addItem(): void {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  // Method to remove an item from the items array
  removeItem(item: string): void {
    this.items = this.items.filter(i => i !== item);
  }
}
