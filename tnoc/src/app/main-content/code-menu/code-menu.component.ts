import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../models';

@Component({
  selector: 'app-code-menu',
  templateUrl: './code-menu.component.html',
  styleUrls: ['./code-menu.component.scss']
})
export class CodeMenuComponent implements OnInit {
  @Input() menu?: Menu;

  constructor() { }

  ngOnInit(): void {
  }

}
