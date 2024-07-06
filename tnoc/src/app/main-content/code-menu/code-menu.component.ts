import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Menu } from '../../models';
import { P5Service } from 'src/app/services/sketch-service.service';

@Component({
  selector: 'app-code-menu',
  templateUrl: './code-menu.component.html',
  styleUrls: ['./code-menu.component.scss']
})
export class CodeMenuComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() menu?: Menu;

  @ViewChild('p5Canvas') p5Canvas!: ElementRef;

  index = '/home/code-projects'
  randomImage: any;
  private p5InstanceIndexes: number[] = [];


  constructor(private p5Service: P5Service) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.p5Canvas) {
      this.p5Service.createSketch(this.p5Canvas, 1);
      this.p5InstanceIndexes.push(0);
    }
  }

  ngOnDestroy(): void {
    this.p5InstanceIndexes.forEach(index => {
      this.p5Service.removeSketch(index);
    });
    }
}
