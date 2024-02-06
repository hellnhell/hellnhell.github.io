import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    {
      name: 'If you want a business profile here',
      url: 'https://www.linkedin.com/in/e-martintechncode'
    },
    {
      name: 'If you want a developer profile here',
      url: 'https://www.github.com/hellnhell'
    },
    {
      name: 'If you want a creative feed here',
      url: 'https://www.instagram.com/helln_rm'
    },
    {
      name: 'If you want to open a current cv',
      url: 'aboutme.html'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
