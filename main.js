//https://teachablemachine.withgoogle.com/models/OomGfS5c5/
function iniciarClasificacion() { navigator.mediaDevices.getUserMedia({ audio: true}); classifier =
ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OomGfS5c5/model.json',
modelReady); } function modelReady(){ classifier.classify( gotResults); }

function gotResults(error,resultado){
    if(error){
        console.log(error);
    }else{
        console.log(resultado);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        document.getElementById("etiqueta_resultado").innerHTML="escucho.. "+resultado[0].label;
        document.getElementById("etiqueta_resultado").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("etiqueta_exactitud").innerHTML = 'Precisión - '+ (resultado[0].confidence*100).toFixed(2)+'%'; document.getElementById("etiqueta_exactitud").style.color = "rgb("+r+","+g+","+b+")";
        img=document.getElementById("alien1");
        img1=document.getElementById("alien2");
        img2=document.getElementById("alien3");
        img3=document.getElementById("alien4");

        if(resultado[0].label=="aplauso"){
            img.src="aliens-01.gif";
            img1.src="aliens-02.png";
            img2.src="aliens-03.png";
            img3.src="aliens-04.png";
        }else if(resultado[0].label=="grito"){
            img.src="aliens-01.png";
            img1.src="aliens-02.gif";
            img2.src="aliens-03.png";
            img3.src="aliens-04.png";
        }else if(resultado[0].label=="chasquido"){
            img.src="aliens-01.png";
            img1.src="aliens-02.png";
            img2.src="aliens-03.gif";
            img3.src="aliens-04.png";
        }else {
            img.src="aliens-01.png";
            img1.src="aliens-02.png";
            img2.src="aliens-03.png";
            img3.src="aliens-04.gif";
        }

    }
}