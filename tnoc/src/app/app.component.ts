import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  backgroundPositionX = 0;
  isDarkMode = true;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  onActivate(event: any) {
    if (event.scrollEvent) {
      event.scrollEvent.subscribe((scrollPos: number) =>
        this.onMainComponentScroll(scrollPos)
      );
    }
    if (event.themeToggle) {
      event.themeToggle.subscribe(() => {
        this.toggleTheme();
      });
    }
  }
  onMainComponentScroll(scrollPos: number) {
    const movementFactor = 0.02;
    const movement = scrollPos * movementFactor;

    const fogLayer1 = document.getElementById('fog-layer-1') as HTMLElement;
    const fogLayer2 = document.getElementById('fog-layer-2') as HTMLElement;

    if (fogLayer1 && fogLayer2) {
      fogLayer1.style.transform = `translateX(-${movement}%)`;
      fogLayer2.style.transform = `translateX(${movement - 50}%)`;
    }
  }
}
