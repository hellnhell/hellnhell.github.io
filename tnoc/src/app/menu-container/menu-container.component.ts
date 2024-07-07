import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrl: './menu-container.component.scss'
})
export class MenuContainerComponent implements OnInit, OnDestroy{
  @Input() menu: any;
  @Input() menuType?: string;
  @Input() sidebarLink?: string;
  @Input() sidebarText?: string;

  isDarkMode = false;
  private subscription = new Subscription();

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.subscription.add(this.themeService.isDarkMode$.subscribe(mode => {
      this.isDarkMode = mode;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
