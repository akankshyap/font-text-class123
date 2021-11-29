rightWristX=0;
leftWristX=0;
difference=0;

function preload(){

}
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(600,220);
    video= createCapture(VIDEO);
    video.size(550,550);
    poseNet=ml5.poseNet(video,modeLoaded);
    poseNet.on('pose',gotPoses)

}

function modeLoaded(){
    console.log ("poseNet is working");

}

function draw(){
background('#808080');
text("akankshya",50,300);
textSize(difference);
fill('#e75480');
stroke('#000000');
}
function gotPoses(results){
   if(results.length >0){
       console.log (results);
       leftWristX=results[0].pose.leftWrist.x;
       rightWristX=results[0].pose.rightWrist.x;
       difference=leftWristX-rightWristX;

   } 
}
