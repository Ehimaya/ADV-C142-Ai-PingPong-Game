rightWristX = "";
rightWristY = "";
scoreRightWrist = 0;

game_status = "";

function setup() {
	canvas = createCanvas(600,400);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(600,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded!');
  }

function gotPoses(results) {
	if(results.length > 0) {
		rightWristX = results[0].pose.rightWrist.x;
	    rightWristY = results[0].pose.rightWrist.y;
	    console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
        
		scoreRightWrist =  results[0].pose.keypoints[10].score;
		console.log("scoreRightWrist = " + scoreRightWrist);
	
	}
}



function draw() {

    image(video, 0, 0, 800, 400);

	if(scoreRightWrist > 0.2) {

	fill("#00FF00");
	stroke("#00FF00");
	circle(rightWristX, rightWristY, 20);
}
	
}