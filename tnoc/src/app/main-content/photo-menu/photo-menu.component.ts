import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../models';

@Component({
  selector: 'app-photo-menu',
  templateUrl: './photo-menu.component.html',
  styleUrls: ['./photo-menu.component.scss']
})
export class PhotoMenuComponent implements OnInit {
  @Input() menu?: Menu;
  @Input() isDarkMode = true;
  randomImage: any;

  constructor() { }

  ngOnInit(): void {
    if (this.menu && this.menu.items.length) {
      const randomIndex = Math.floor(Math.random() * this.menu.items.length);
      this.randomImage = this.menu.items[randomIndex];
    }
  }

}
