import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { P5Service } from 'src/app/services/sketch-service.service';

@Component({
  selector: 'app-code-projects',
  templateUrl: './code-projects.component.html',
  styleUrls: ['./code-projects.component.scss']
})
export class CodeProjectsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('p5Canvas1', { static: false }) p5Canvas1!: ElementRef;
  @ViewChild('p5Canvas2', { static: false }) p5Canvas2!: ElementRef;
  @ViewChild('p5Canvas3', { static: false }) p5Canvas3!: ElementRef;
  @ViewChild('p5Canvas4', { static: false }) p5Canvas4!: ElementRef;


  private p5InstanceIndexes: number[] = [];

  constructor(private p5Service: P5Service) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.p5Canvas1) {
        this.p5Service.createSketch(this.p5Canvas1, 1);
        this.p5InstanceIndexes.push(0);
      }
      if (this.p5Canvas2) {
        this.p5Service.createSketch(this.p5Canvas2, 2);
        this.p5InstanceIndexes.push(1);
      }
      if (this.p5Canvas3) {
        this.p5Service.createSketch(this.p5Canvas3, 3);
        this.p5InstanceIndexes.push(2);
      }
      if (this.p5Canvas4) {
        this.p5Service.createSketch(this.p5Canvas4, 4);
        this.p5InstanceIndexes.push(3);
      }
    }, 0);
  }

  ngOnDestroy(): void {
    this.p5InstanceIndexes.forEach(index => {
      this.p5Service.removeSketch(index);
    });
  }
}
