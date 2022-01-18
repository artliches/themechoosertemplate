import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() themes: any;
  @Input() refreshCards  = false;
  cardArray: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.refreshCardArray();
  }

  ngOnChanges(): void {
    this.refreshCardArray();
  }

  refreshCardArray(): void {
    const cardsData = localStorage.getItem('cards');
    this.cardArray = cardsData ? JSON.parse(cardsData) : [];
  }
}
