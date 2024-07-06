import { Injectable, ElementRef } from '@angular/core';
import * as p5 from 'p5';

@Injectable({
  providedIn: 'root',
})
export class P5Service {
  private p5Instances: p5[] = [];

  constructor() {}

  public createSketch(canvasContainer: ElementRef, sketchId: number): void {
    const mandalaNumPoints = 10;
    const mandalaAngleOffset = (Math.PI * 2) / mandalaNumPoints;
    const mandalaBaseAngles = Array(mandalaNumPoints)
      .fill(0)
      .map((_, i) => i * mandalaAngleOffset);
    const mandalaAnglePhases = Array(mandalaNumPoints)
      .fill(0)
      .map(() => Math.random() * Math.PI * 2);
    const mandalaAnglePhasesInverted = Array.from(mandalaAnglePhases);
    const mandalaPhaseSpeed = 0.2;
    let mandalaRadius: number;
    let mandalaGraphics: p5.Graphics;

    const sketch = (p: p5) => {
      let img: p5.Image;
      let imgNoise: p5.Image;
      const glitchSpeed = 0.05;
      const glitchThreshold = 20;
      const canvasSize = sketchId === 4 ? [400, 400] : [400, 400];

      p.preload = () => {
        if (sketchId === 1 || sketchId === 2 || sketchId === 3) {
          img = p.loadImage(
            'assets/imgs/IMG_1180.PNG',
            () => {},
            (err) => {
              console.error('Failed to load image', err);
            }
          );
        }
      };

      p.setup = () => {
        p.createCanvas(canvasSize[0], canvasSize[1]).parent(
          canvasContainer.nativeElement
        );
        if (sketchId === 1 || sketchId === 2 || sketchId === 3) {
          if (img) {
            img.resize(canvasSize[0], canvasSize[1]);
            imgNoise = img.get();
            img.loadPixels();
          }
        } else if (sketchId === 4) {
          p.noFill();
          p.frameRate(30);
          mandalaRadius = canvasSize[0] * 0.35;
          mandalaGraphics = p.createGraphics(canvasSize[0], canvasSize[1]);
          mandalaGraphics.clear();
        }
      };

      p.draw = () => {
        if (sketchId === 1 || sketchId === 2 || sketchId === 3) {
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
        } else if (sketchId === 4) {
          mandalaGraphics.clear();
          drawMandala(
            mandalaGraphics,
            mandalaAnglePhases,
            canvasSize[0] / 2,
            canvasSize[1] / 2
          );
          // drawMandala(
          //   mandalaGraphics,
          //   mandalaAnglePhasesInverted,
          //   (3 * canvasSize[0]) / 2,
          //   canvasSize[1] / 2
          // );
          p.image(mandalaGraphics, 0, 0);
          for (let i = 0; i < mandalaNumPoints; i++) {
            mandalaAnglePhases[i] += mandalaPhaseSpeed;
            mandalaAnglePhasesInverted[i] -= mandalaPhaseSpeed;
          }
        }
      };

      const dirty = () => {
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
              const glitchIntensity = p.map(
                p.noise(i * 0.01, j * 0.01, p.frameCount * glitchSpeed * 0.1),
                0,
                1,
                0,
                1
              );
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
        p.background(0);
        p.image(imgNoise, 0, 0);
      };

      const clouds = () => {
        imgNoise.loadPixels();

        for (let i = 0; i < img.width; i++) {
          for (let j = 0; j < img.height; j++) {
            const index = (i + j * img.width) * 4;
            const r = img.pixels[index];
            const g = img.pixels[index + 1];
            const b = img.pixels[index + 2];
            let grayscale = (r + g + b) / 3;

            if (grayscale > 150) {
              grayscale += p.map(
                p.noise(p.frameCount * glitchSpeed * 0.6 + i * 0.05, j * 0.05),
                0,
                1,
                -50,
                50
              );
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
      };

      const road = () => {
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
              const glitchIntensity = p.map(
                p.noise(i * 0.6, j * 0.6, p.frameCount * glitchSpeed * 0.1),
                0,
                1,
                0,
                1
              );
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

        p.background(0);
        p.image(imgNoise, 0, 0);
      };

      const drawMandala = (
        graphics: p5.Graphics,
        phases: number[],
        offsetX: number,
        offsetY: number
      ) => {
        graphics.push();
        graphics.translate(offsetX, offsetY);
        for (let i = 0; i < mandalaNumPoints; i++) {
          for (let j = i; j < mandalaNumPoints; j++) {
            let angle1 =
              mandalaBaseAngles[i] +
              Math.sin(phases[i]) * mandalaAngleOffset * 0.5;
            let angle2 =
              mandalaBaseAngles[j] +
              Math.sin(phases[j]) * mandalaAngleOffset * 0.5;

            let x1 = mandalaRadius * Math.cos(angle1);
            let y1 = mandalaRadius * Math.sin(angle1);

            let x2 = mandalaRadius * Math.cos(angle2);
            let y2 = mandalaRadius * Math.sin(angle2);

            graphics.stroke(0, 50);
            graphics.line(x1 + 2, y1 + 2, x2 + 2, y2 + 2);

            graphics.stroke(255);
            graphics.line(x1, y1, x2, y2);
          }
        }
        graphics.pop();
      };
    };
    this.p5Instances.push(new p5(sketch));
  }

  public removeSketch(index: number): void {
    if (this.p5Instances[index]) {
      this.p5Instances[index].remove();
      this.p5Instances.splice(index, 1);
    }
  }
}
