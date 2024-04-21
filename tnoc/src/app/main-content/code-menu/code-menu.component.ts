import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../models';

@Component({
  selector: 'app-code-menu',
  templateUrl: './code-menu.component.html',
  styleUrls: ['./code-menu.component.scss']
})
export class CodeMenuComponent implements OnInit {
  @Input() menu?: Menu;

  index = 'Coding projects'
  randomImage: any;

  constructor() { }

  ngOnInit(): void {
    if (this.menu && this.menu.items.length) {
      const randomIndex = Math.floor(Math.random() * this.menu.items.length);
      this.randomImage = this.menu.items[randomIndex];
    }
  }

}
