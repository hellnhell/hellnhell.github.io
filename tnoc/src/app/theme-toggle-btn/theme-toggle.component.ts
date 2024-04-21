import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
  currentTheme = this.themeService.isDarkMode$;
  
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
}
