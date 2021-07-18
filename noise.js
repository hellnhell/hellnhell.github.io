let img;

function preload(){
    img = loadImage("imgs/aritz-min_opt_white.jpg");
    imgNoise = loadImage("imgs/aritz-min_opt_white.jpg")
}

function setup() {
  createCanvas(400, 57);

	img.resize(400, 57);
	imgNoise.resize(400, 57);
	image(img, 0, 0, img.width, img.height);
	img.loadPixels();
}
  
function draw() {
  colorMode(HSL, 255);
  glitch();
}

function glitch(){
	imgNoise.loadPixels();
	for(let i = 0; i < img.width; i++){
		for(let j = 0; j < img.height; j++){
			var index = (i + j * img.width) * 4;
			let H = img.pixels[index + 0];
			let S = img.pixels[index + 1];
			let L = img.pixels[index + 2];
			for (let x = 0; x <= (4000); x++)
    	{
			  H = (H + (x * 0.3)) % 255.0;
		  	L = (H + (x * 0.1)) % 255.0;
	      imgNoise.pixels[index + 0] = 0;
				imgNoise.pixels[index + 1] = 0;
				imgNoise.pixels[index + 2] = 0;
				if (L > 240 && L < 260)
          imgNoise.pixels[index + 3] = (H, S, random(L));
        else
          imgNoise.pixels[index + 3] = (H, S , L * 2);
        }
    	}
	  }
	  imgNoise.updatePixels();
	  clear();
	  image(imgNoise, 0, 0, img.width, img.height);
  };