noseX=0;
noseY=0;

function preload()
{
    clown_image= loadImage('https://i.postimg.cc/J4bs3tKM/39747ec965e936d784d9f6cb39fb9022.png');
}

function setup()
{
    canvas= createCanvas(300,300);
    canvas.center();
    box= createCapture(VIDEO);
    box.size(300,300);
    box.hide();
    poseNet= ml5.poseNet(box, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-35;
        noseY=results[0].pose.nose.y-35;
        console.log("nose x=" +noseX);
        console.log("nose y=" +noseY);
    }
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function draw()
{
    image(box,0,0,300,300);
    image(clown_image,noseX,noseY,70,70);
}

function take_snapshot()
{
    save('myfilterapp.png');
}
