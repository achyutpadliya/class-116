noseX=0
noseY=0

function preload(){
dog_nose = loadImage('https://i.postimg.cc/L4cVt48n/49-497250-snapchat-angel-filter-png-clipart-social-media-clip-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized')
}

function draw(){
image(video ,0,0,300,300);
image(dog_nose,noseX-99,noseY-150,190,230);
}

function take_snapshot(){
save('myFilterImage.png');
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = " + results[0].pose.nose.x);
    console.log("noseY = " + results[0].pose.nose.y);
}
}