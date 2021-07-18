let img;

function preload(){
    img = loadImage("imgs/coat1.JPG");
    imgNoise = loadImage("imgs/coat1.JPG")
}

function setup() {
	 createCanvas(400, 579);
  
	img.resize(400, 579);
	imgNoise.resize(400, 579);
	image(img, 0, 0, img.width, img.height);
	colorMode(HSL);
	img.loadPixels();
  
  }

  function draw() {	
	glitch();
  }

function glitch(){
	imgNoise.loadPixels();
	for (let x = 0; x < (10000); x++)
	{
		for(let i = 0; i < img.width; i++){
			for(let j = 0; j < img.height; j++){
				var index = (i + j * img.width) * 4;
				let H = img.pixels[index + 0];
				let S = img.pixels[index + 1];
				let L = img.pixels[index + 2];
				H = (H + x) % 255.0;
				L = (H + x)  % 255.0;
				// S = (H + x) % 255.0;
				// if (L > 250){
					imgNoise.pixels[index + 0] = 0;
					imgNoise.pixels[index + 1] = 0;
					imgNoise.pixels[index + 2] = 0;
					imgNoise.pixels[index + 3] = (H, S, L);
				// }
			}
		}
	}
	imgNoise.updatePixels();
	clear();
	image(imgNoise, 0, 0, img.width, img.height);

};