var x = Math.floor(Math.random()*6)+1;
// console.log(x);
var y = Math.floor(Math.random()*6)+1;
// console.log(y);
var randomDiceImage1 = "dice"+x+".png";

var randomDiceImage2 = "dice"+y+".png";

document.querySelectorAll("img")[0].setAttribute("src","images/"+randomDiceImage1);

document.querySelectorAll("img")[1].setAttribute("src","images/"+randomDiceImage2);

if(x>y)
{
  document.querySelector("h1").innerHTML="🎉 Player 1 wins the Game";
}
else if(x<y){
document.querySelector("h1").innerHTML="🎉 Player 2 wins the Game";
}
else{
  document.querySelector("h1").innerHTML=" 🤷‍♂️ Oops Game Draw";

}
