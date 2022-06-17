pridiction_1="";
pridiction_2="";
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function takeSnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
});
}
console.log('ml5.version-',ml5.version);
classifier=ml5.imageClassifier('',modelLoded);
function modelLoded(){
    console.log("modelLoded");
}
function speak(){
    synth=window.speechSynthesis;
    speak_data_1="the first pridiction is"+pridiction_1;
    speak_data_2="and the second pridiction is"+pridiction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
function check(){
img=document.getElementById("captured_image");
classifier.classify(img,gotResult);
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }else{
    console.log(result);
    }
}