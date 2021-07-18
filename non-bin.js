let img;

function preload(){
    img = loadImage("imgs/non-binary(1).png");
    imgNoise = loadImage("imgs/non-binary(1).png")
}

function setup() {
  createCanvas(450, 260);

  img.resize(550, 360);
  imgNoise.resize(550, 360);
  image(img, 0, 0, img.width, img.height);
  img.loadPixels();
}
function draw()
{
    imgNoise.loadPixels();
    for (var i = 0; i < img.width; i++) {
      for (var j = 0; j < img.height; j++) {
        var index = (i + j * img.width) * 4;
        let H = img.pixels[index + 0];
        let S = img.pixels[index + 1];
        let L = img.pixels[index + 2];
        for (let x = 0; x <= (frameCount); x++)
        {
          H = (H + (x * 2)) % 255.0;
          imgNoise.pixels[index + 0] = 0;
          imgNoise.pixels[index + 1] = 0;
          imgNoise.pixels[index + 2] = 0;
          if (H < 140)
            imgNoise.pixels[index + 3] = (random(H), S, random(L));
          else
            imgNoise.pixels[index + 3] = (H, S , L);
          }
        }
    }
    imgNoise.updatePixels();
    clear();
    image(imgNoise, -50, 0, img.width, img.height);
};

