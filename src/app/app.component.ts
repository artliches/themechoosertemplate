import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'toggleDropdown',
      [
        transition(
          ':enter',
          [
            style({opacity: 0}),
            animate('.15s ease-out', style({opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({opacity: 1}),
            animate('.15s ease-out', style({opacity: 0}))
          ]
        )
      ]
    )
  ]
})
export class AppComponent implements OnInit {
  refresh = false;
  themes: {[key: string]: boolean} = {
    terminal: true,
    dark: false,
    light: false,
    mork: false,
    cyber: false,
  };
  showThemes = false;
  faIcon = faSwatchbook;

  constructor() {}

  toggleShowThemes(): void {
    this.showThemes = !this.showThemes;
  }

  getThemeObject(): Object {
    return {
      dark: this.themes.dark,
      light: this.themes.light,
      terminal: this.themes.terminal,
      mork: this.themes.mork,
      cyber: this.themes.cyber
    };
  }

  switchTheme(themeName: string): void {
    for (const keys in this.themes) {
      if (this.themes.hasOwnProperty(keys)) {
        this.themes[keys] = false;
      }
    }
    this.themes[themeName] = true;
    localStorage.setItem('theme', themeName);
  }

  refreshCards(event: boolean): void {
    console.log(event);
    this.refresh = !this.refresh;
  }

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.switchTheme(savedTheme);
    }
  }
}
