import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import * as p5 from 'p5';
import { menus } from '../models';
import { ThemeService } from '../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit, OnDestroy {
  @Output() scrollEvent = new EventEmitter<number>();

  @ViewChild('mainMenu', { static: false })
  mainMenu!: ElementRef<HTMLDivElement>;

  menus = menus;

  isDarkMode = false;
  private subscriptions = new Subscription();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.themeService.isDarkMode$.subscribe((isDarkMode) => {
        this.isDarkMode = isDarkMode;
      })
    );
  }

  @HostListener('window:wheel', ['$event'])
  onWindowScroll(event: WheelEvent): void {
    if (this.mainMenu) {
      const currentScroll = this.mainMenu.nativeElement.scrollLeft;
      const scrollAmount = event.deltaY;
      this.mainMenu.nativeElement.scrollLeft = currentScroll + scrollAmount;
      this.scrollEvent.emit(this.mainMenu.nativeElement.scrollLeft);
    }
  }

  scrollToContact(): void {
    const contactMenu = this.mainMenu.nativeElement.querySelector('#contact-menu') as HTMLElement;
    if (contactMenu) {
      const scrollLeft = contactMenu.offsetLeft - this.mainMenu.nativeElement.offsetLeft;
      this.mainMenu.nativeElement.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
