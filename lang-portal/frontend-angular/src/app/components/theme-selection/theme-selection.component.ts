import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-selection',
  templateUrl: './theme-selection.component.html',
  styleUrls: ['./theme-selection.component.css']
})
export class ThemeSelectionComponent {

  themes = ['Light', 'Dark'];
  selectedTheme = 'Light';

  onThemeChange(theme: string): void {
    this.selectedTheme = theme;
    // Apply the theme change logic here
  }
}
