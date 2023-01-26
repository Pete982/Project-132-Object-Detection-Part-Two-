image1 = "";

Status1 = "";

objects  = [];

function preload(){
    loadImage("IMG_4790.jpg");

}

function setup(){
   canvas = createCanvas(300, 300);

   canvas.center();

   objectDetector = ml5.objectDetector('cocossd', modelload);

   document.getElementById("Status").innerHTML = "Hi! Time for me to detect your objects!"

}

function moddelloaded(){
     console.log("The Model is Loaded!!!");

    Status1 = true;

   objectDetector.detect(image1, gotResult);

}

function gotResult(error, results){
    if(error){

      console.error(error);
    }

    console.log(results);

    object = results;
}