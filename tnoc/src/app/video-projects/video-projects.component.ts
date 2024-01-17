import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-projects',
  templateUrl: './video-projects.component.html',
  styleUrls: ['./video-projects.component.scss']
})
export class VideoProjectsComponent implements OnInit {
  videoNames = [
    'bici-man.MOV',
    'ciu.MOV',
    'CLIP_CARDO_1.mp4',
    'CLIP_CHAIR_1.mp4',
    'CLIP_MIR_1.mp4',
    'CLIP_SAND_1.mp4',
    'FULL_1_BN.mp4',
    'HEFESTION.mp4',
    'lovers_cuch.mp4',
    'lovers.mp4',
    'MYLAR_Socials 15 sec 3.mp4',
    'MYLAR_Socials 15 sec 4.mp4',
    'MYLAR_Socials 15 sec 5.mp4',
    'Test_bot_wb.mp4',
    'Test_seagulls_wb.mp4',
    'TEST_SKN_end.mp4',
    'train.png',
    'WP_1.mp4',
    'wp_4.mp4',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
