import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import * as p5 from 'p5';

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

  isDarkMode = true;
  menus = [
    {
      title: 'Photography',
      isActive: true,
      items: [
        {
          title: '#treeoflife',
          year: '2022',
          dimensions: 'Φ720',
          image: '/assets/imgs/bollers2.JPG',
        },
        {
          title: '#landscape',
          year: '2022',
          dimensions: 'Φ720',
          image: '/assets/imgs/bollers2.JPG',
        },
        {
          title: '#treeoflife',
          year: '2022',
          dimensions: 'Φ720',
          image: '/assets/imgs/bollers2.JPG',
        },
        {
          title: '#landscape',
          year: '2022',
          dimensions: 'Φ720',
          image: '/assets/imgs/bollers2.JPG',
        },
      ],
    },
    {
      title: 'Video',
      isActive: true,
      items: [
        {
          title: '#treeoflife',
          year: '2022',
          dimensions: 'Φ720',
          image: '/assets/imgs/bollers2.JPG',
        },
        {
          title: '#landscape',
          year: '2022',
          dimensions: 'Φ720',
          image: '/assets/imgs/bollers2.JPG',
        },
      ],
    },
    {
      title: 'Coding projects',
      isActive: true,
      items: [
        {
          title: '#treeoflife',
          year: '2022',
          dimensions: 'Φ720',
          image: '/assets/imgs/bollers2.JPG',
        },
        {
          title: '#landscape',
          year: '2022',
          dimensions: 'Φ720',
          image: '/assets/imgs/bollers2.JPG',
        },
      ],
    },
    // ... other menus
  ];

  constructor() { }

  ngOnInit(): void {
  }  

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeToggle.emit();
  }
}
