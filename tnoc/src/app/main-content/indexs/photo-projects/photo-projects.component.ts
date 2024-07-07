import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-setting.service';

@Component({
  selector: 'app-photo-projects',
  templateUrl: './photo-projects.component.html',
  styleUrls: ['./photo-projects.component.scss']
})
export class PhotoProjectsComponent implements OnInit {
  photoNames: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.photoNames = this.dataService.getImageUrls();
  }

}
