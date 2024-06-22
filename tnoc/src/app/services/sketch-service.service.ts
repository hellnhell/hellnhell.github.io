import { Injectable, ElementRef } from '@angular/core';
import * as p5 from 'p5';

@Injectable({
  providedIn: 'root'
})
export class P5Service {
  private p5Instances: p5[] = [];

  constructor() { }

  public createSketch(canvasContainer: ElementRef, sketchId: number): void {
    const sketch = (p: p5) => {
      let img: p5.Image;
      let imgNoise: p5.Image;
      const glitchSpeed = 0.05;
      const glitchThreshold = 20;
      const canvasSize = 300;

      p.preload = () => {
        img = p.loadImage('assets/imgs/IMG_1180.PNG', () => {
        }, (err) => {
          console.error('Failed to load image', err);
        });
      };

      p.setup = () => {
        p.createCanvas(canvasSize, canvasSize).parent(canvasContainer.nativeElement);
        if (img) {
          img.resize(canvasSize, canvasSize); // Resize the image to fit the canvas
          imgNoise = img.get(); // Copy the image
          img.loadPixels();
        }
      };

      p.draw = () => {
        if (img && img.pixels.length > 0) {
          p.colorMode(p.RGB, 255);
          if (sketchId === 1) {
            dirty();
          } else if (sketchId === 2) {
            clouds();
          } else if (sketchId === 3) {
            road();
          }
        }
      };

      function dirty() {
        const glitchWave = p.random(p.sin(p.frameCount * glitchSpeed));
        const imgNoise = p.createImage(img.width, img.height);
        imgNoise.loadPixels();

        for (let i = 0; i < img.width; i++) {
          for (let j = 0; j < img.height; j++) {
            const index = (i + j * img.width) * 4;
            const r = img.pixels[index];
            const g = img.pixels[index + 1];
            const b = img.pixels[index + 2];
            const a = img.pixels[index + 3];

            if (p.brightness([r, g, b]) > glitchThreshold) {
              const glitchIntensity = p.map(p.noise(i * 0.01, j * 0.01, p.frameCount * glitchSpeed * 0.1), 0, 1, 0, 1);
              if (glitchIntensity > p.abs(glitchWave)) {
                imgNoise.pixels[index] = 255 - r;
                imgNoise.pixels[index + 1] = 255 - g;
                imgNoise.pixels[index + 2] = 255 - b;
                imgNoise.pixels[index + 3] = a;
              } else {
                imgNoise.pixels[index] = r;
                imgNoise.pixels[index + 1] = g;
                imgNoise.pixels[index + 2] = b;
                imgNoise.pixels[index + 3] = a;
              }
            } else {
              imgNoise.pixels[index] = r;
              imgNoise.pixels[index + 1] = g;
              imgNoise.pixels[index + 2] = b;
              imgNoise.pixels[index + 3] = a;
            }
          }
        }
        imgNoise.updatePixels();

        // Display the image
        p.background(0);
        p.image(imgNoise, 0, 0);
      }

      function road() {
        const glitchWave = p.random(p.sin(p.frameCount * glitchSpeed));
        const imgNoise = p.createImage(img.width, img.height);
        imgNoise.loadPixels();

        for (let i = 0; i < img.width; i++) {
          for (let j = 0; j < img.height; j++) {
            const index = (i + j * img.width) * 4;
            const r = img.pixels[index];
            const g = img.pixels[index + 1];
            const b = img.pixels[index + 2];
            const a = img.pixels[index + 3];

            if (p.brightness([r, g, b]) > glitchThreshold) {
              const glitchIntensity = p.map(p.noise(i * 0.6, j * 0.6, p.frameCount * glitchSpeed * 0.1), 0, 1, 0, 1);
              if (glitchIntensity > p.abs(glitchWave)) {
                imgNoise.pixels[index] = 255 - r;
                imgNoise.pixels[index + 1] = 255 - g;
                imgNoise.pixels[index + 2] = 255 - b;
                imgNoise.pixels[index + 3] = a;
              } else {
                imgNoise.pixels[index] = r;
                imgNoise.pixels[index + 1] = g;
                imgNoise.pixels[index + 2] = b;
                imgNoise.pixels[index + 3] = a;
              }
            } else {
              imgNoise.pixels[index] = r;
              imgNoise.pixels[index + 1] = g;
              imgNoise.pixels[index + 2] = b;
              imgNoise.pixels[index + 3] = a;
            }
          }
        }
        imgNoise.updatePixels();

        // Display the image
        p.background(0);
        p.image(imgNoise, 0, 0);
      }

      function clouds() {
        imgNoise.loadPixels();
       
        for (let i = 0; i < img.width; i++) {
          for (let j = 0; j < img.height; j++) {
            const index = (i + j * img.width) * 4;
            const r = img.pixels[index];
            const g = img.pixels[index + 1];
            const b = img.pixels[index + 2];
            let grayscale = (r + g + b) / 3;
            
            if (grayscale > 150) {
              grayscale += p.map(p.noise(p.frameCount * glitchSpeed * 0.6 + i * 0.05, j * 0.05), 0, 1, -50, 50);
            }
            imgNoise.pixels[index] = grayscale;
            imgNoise.pixels[index + 1] = grayscale;
            imgNoise.pixels[index + 2] = grayscale;
            imgNoise.pixels[index + 3] = 255;
          }
        }
        imgNoise.updatePixels();
        p.background(0);
        p.image(imgNoise, 0, 0);
      }
    };

    const instance = new p5(sketch);
    this.p5Instances.push(instance);
  }

  public removeSketch(): void {
    this.p5Instances.forEach(instance => instance.remove());
    this.p5Instances = [];
  }
}
