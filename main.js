prediction_1="";
prediction_2="";
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
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2T5lfEInM/model.json',modelLoded);
function modelLoded(){
    console.log("modelLoded");
}
function speak(){
    synth=window.speechSynthesis;
    speak_data_1="the first pridiction is"+prediction_1;
    speak_data_2="and the second pridiction is"+prediction_2;
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
    document.getElementById("result_name").innerHTML=result[0].label;
    document.getElementById("result_name_2").innerHTML=result[1].label;
    prediction_1=result[0].label;
    prediction_2=result[1].label;
    speak();
if(result[0].label=="HAPPY"){
document.getElementById("update_emoji").innerHTML="&#128522;";
}
if(result[0].label=="sad"){
document.getElementById("update_emoji").innerHTML="&#128532;";
}
if(result[0].label=="angry"){
document.getElementById("update_emoji").innerHTML="&#128548;";
}
if(result[0].label=="crying"){
document.getElementById("update_emoji").innerHTML="&#128546;";
}
if(result[1].label=="HAPPY"){
    document.getElementById("update_emoji_2").innerHTML="&#128522;";
    }
    if(result[1].label=="sad"){
    document.getElementById("update_emoji_2").innerHTML="&#128532;";
    }
    if(result[1].label=="angry"){
    document.getElementById("update_emoji_2").innerHTML="&#128548;";
    }
    if(result[1].label=="crying"){
    document.getElementById("update_emoji_2").innerHTML="&#128546;";
    }
    }
}