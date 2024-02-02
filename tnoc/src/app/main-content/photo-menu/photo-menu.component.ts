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

  constructor() { }

  ngOnInit(): void {
  }

}
