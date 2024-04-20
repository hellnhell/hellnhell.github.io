import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import * as p5 from 'p5';
import { menus } from './models';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @Output() scrollEvent = new EventEmitter<number>();
  @Output() themeToggle = new EventEmitter<void>();

  @ViewChild('mainMenu') mainMenu!: ElementRef<HTMLDivElement>;

  @HostListener('window:wheel', ['$event'])
  onWindowScroll(event: WheelEvent) {
    if (this.mainMenu) {
      const currentScroll = this.mainMenu.nativeElement.scrollLeft;
      const scrollAmount = event.deltaY;
      this.mainMenu.nativeElement.scrollLeft = currentScroll + scrollAmount;
      this.scrollEvent.emit(this.mainMenu.nativeElement.scrollLeft);
    }
  }

  isDarkMode = false;
  menus = menus;

  constructor() { }

  ngOnInit(): void {
  }  

  toggleTheme(isChecked: boolean) {
    console.log("entra")
    this.isDarkMode = isChecked;
    this.themeToggle.emit();
  }
  
}
