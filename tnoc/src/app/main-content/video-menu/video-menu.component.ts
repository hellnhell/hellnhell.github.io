import { Component, Input, OnInit } from '@angular/core';
import { Menu, MenuItem } from '../../models';

@Component({
  selector: 'app-video-menu',
  templateUrl: './video-menu.component.html',
  styleUrls: ['./video-menu.component.scss']
})
export class VideoMenuComponent implements OnInit {
  @Input() menu?: Menu;

  index = '/home/videos'
  selectedVideo?: MenuItem;
  categories: { [key: string]: MenuItem[] } = {};
  panelOpenState = false;

  constructor() {
  }

  ngOnInit(): void {
    this.categorizeVideos();
    this.selectedVideo = this.menu?.items[0];
  }

  categorizeVideos(): void {
    this.menu?.items.forEach(item => {
      const category = item.videoCategory as string;
      if (!this.categories[category]) {
        this.categories[category] = [];
      }
      this.categories[category].push(item);
    });
  }
  
  selectVideo(video: any): void {
    this.selectedVideo = video;
  }

  onVideoError(event: Event): void {
    console.error('Video failed to load:', event);
  }
}
