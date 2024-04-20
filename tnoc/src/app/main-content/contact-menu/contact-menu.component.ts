import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../models';

@Component({
  selector: 'app-contact-menu',
  templateUrl: './contact-menu.component.html',
  styleUrls: ['./contact-menu.component.scss']
})
export class ContactMenuComponent implements OnInit {
  @Input() menu?: Menu;
  @Input() isDarkMode = true;

  navLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/e-martintechncode'
    },
    {
      name: 'Github',
      url: 'https://www.github.com/hellnhell'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/helln_rm'
    },
    {
      name: 'CV',
      url: 'aboutme.html'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
