import { Component, Input, OnInit } from '@angular/core';
import { Menu, MenuItem } from '../models';

@Component({
  selector: 'app-video-menu',
  templateUrl: './video-menu.component.html',
  styleUrls: ['./video-menu.component.scss']
})
export class VideoMenuComponent implements OnInit {
  @Input() menu?: Menu;
  selectedVideo?: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.selectedVideo = this.menu?.items[0];
  }


  selectVideo(video: any): void {
    this.selectedVideo = video;
  }
}
