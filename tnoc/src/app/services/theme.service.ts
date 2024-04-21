import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkMode.asObservable();

  constructor() {}

  toggleDarkMode() {
    this.darkMode.next(!this.darkMode.value);
  }

  setDarkMode(isDark: boolean): void {
    this.darkMode.next(isDark);
  }
}
