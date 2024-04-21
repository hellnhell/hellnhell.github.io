import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-projects',
  templateUrl: './photo-projects.component.html',
  styleUrls: ['./photo-projects.component.scss']
})
export class PhotoProjectsComponent implements OnInit {
  photoNames = [
    'bollers2.JPG',
    'ciu-tumbado.png',
    'cruz.png',
    'cubic_buildin.png',
    'f4.png',
    'glove_1.JPG',
    'glove_2.jpg',
    'hanged.png',
    'man_window.png',
    'rodin_walker.png',
    'señor1.JPG',
    'señor2.JPG',
    'señor3.JPG',
    'train.png',
    'women-dus.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
