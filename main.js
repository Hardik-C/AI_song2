music1 = "";
music2 = "";
scoreLeftWrist = 0;
scoreRightWrist = 0;

song_staus ="";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload()
{
    music1 = loadSound("music1.mp3");
    music2 = loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function draw()
{
    image(video,0,0,600,500);
    song_staus = music1.isPlaying()
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLeftWrist > 0.2)
    {
       circle(leftWristX,leftWristY,20);
       music2.stop();
       if(song_staus == false)
       {
        music1.play()
        document.getElementById("updatehtag").innerHTML = "Bing bing boo";
       }
    }
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("ScoreRightWrist ="+scoreRightWrist+"ScoreLeftWrist = " + scoreLeftWrist);
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY ="+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX ="+rightWristX+"rightWristY ="+rightWristY);
    }
}
function loadSound()
{
    console.log("loadSound");
}
























