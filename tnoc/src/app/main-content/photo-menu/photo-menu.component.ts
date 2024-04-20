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
<<<<<<< HEAD
  randomImage: any;
=======
>>>>>>> c7b25aa45666e519c7c18f241b47ca5bd04c2361

  constructor() { }

  ngOnInit(): void {
<<<<<<< HEAD
    if (this.menu && this.menu.items.length) {
      const randomIndex = Math.floor(Math.random() * this.menu.items.length);
      this.randomImage = this.menu.items[randomIndex];
    }
=======
>>>>>>> c7b25aa45666e519c7c18f241b47ca5bd04c2361
  }

}
