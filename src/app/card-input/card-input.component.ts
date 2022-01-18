import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent implements OnInit {
  @Output() refreshCards: EventEmitter<boolean> = new EventEmitter();

  cardInputForm = new FormGroup({
    itemTitle: new FormControl(''),
    itemKeywords: new FormControl(''),
    itemDescription: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  clear(): void {
    localStorage.clear();
  }

  onSubmit(): void {
    // create a formData array
    let currCard = [];
    const currStorage = localStorage.getItem('cards');

    if (currStorage) {
      currCard = JSON.parse(currStorage);
    }

    currCard.push(this.cardInputForm.value);
    localStorage.setItem('cards', JSON.stringify(currCard));
    this.refreshCards.emit(true);
  }
}
