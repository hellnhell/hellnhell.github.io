import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-projects',
  templateUrl: './video-projects.component.html',
  styleUrls: ['./video-projects.component.scss']
})
export class VideoProjectsComponent implements OnInit {
  videoNames = [
    { name: 'CLIP_CARDO_1.mp4' },
    { name: 'CLIP_CHAIR_1.mp4' },
    { name: 'CLIP_MIR_1.mp4' },
    { name: 'CLIP_SAND_1.mp4' },
    { name: 'FULL_1_BN.mp4', poster: 'assets/imgs/wp_cover2.png' },
    { name: 'HEFESTION.mp4' },
    { name: 'lovers_cuch.mp4', poster: 'assets/imgs/LOVERSI.png' },
    { name: 'lovers.mp4', poster: 'assets/imgs/LOVERSII.png' },
    { name: 'MYLAR_Socials_3.mp4' },
    { name: 'MYLAR_Socials_4.mp4' },
    { name: 'MYLAR_Socials_5.mp4' },
    { name: 'Test_bot_wb.mp4' },
    { name: 'Test_seagulls_wb.mp4' },
    { name: 'TEST_SKN_end.mp4' },
    { name: 'wp_1.mp4', poster: 'assets/imgs/wp_cover1.png' },
    { name: 'wp_4.mp4', poster: 'assets/imgs/wp_cover3.png' },
  ];

  categorizedVideos: { category: string, videos: { name: string, poster?: string }[] }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.categorizeVideos();
  }

  private categorizeVideos(): void {
    const categories = [
      { name: 'Clip Videos', filter: (video: { name: string }) => video.name.startsWith('CLIP') },
      { name: 'Full Videos', filter: (video: { name: string }) => video.name.startsWith('FULL_1_BN') },
      { name: 'Mylar Videos', filter: (video: { name: string }) => video.name.startsWith('MYLAR') },
      { name: 'Hefestion Videos', filter: (video: { name: string }) => video.name.startsWith('HEFESTION') },
      { name: 'WP Videos', filter: (video: { name: string }) => video.name.startsWith('wp') },
      { name: 'Lovers Videos', filter: (video: { name: string }) => video.name.startsWith('lovers') },
      { name: 'Test Videos', filter: (video: { name: string }) => video.name.startsWith('Test') || video.name.startsWith('TEST') },
    ];

    categories.forEach(category => {
      const filteredVideos = this.videoNames.filter(category.filter);
      if (filteredVideos.length > 0) {
        this.categorizedVideos.push({ category: category.name, videos: filteredVideos });
        this.videoNames = this.videoNames.filter(video => !category.filter(video));
      }
    });
  }

  getCategoryClassName(category: string): string {
    return category.replace(/\s+/g, '-').toLowerCase();
  }

  playPauseVideo(event: Event): void {
    const video = event.target as HTMLVideoElement;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
}
