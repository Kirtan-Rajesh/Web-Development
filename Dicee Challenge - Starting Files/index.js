var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage =  "images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src",randomDiceImage);

 var randomNumber2=Math.floor(Math.random()*6)+1;
 var randomDiceImage2= "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "&#128511 Player 1 WINS &#128511"
}
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "&#128511 Player 2 WINS &#128511"
}
if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML= "&#128511 DRAW &#128511"
}
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage =  "images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src",randomDiceImage);

 var randomNumber2=Math.floor(Math.random()*6)+1;
 var randomDiceImage2= "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "&#128511 Player 1 WINS &#128511"
}
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "&#128511 Player 2 WINS &#128511"
}
if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML= "&#128511 DRAW &#128511"
}
