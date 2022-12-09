document.getElementById('h-img').onclick = op1;
document.getElementById('t-img').onclick = op2;
document.getElementById('o-img').onclick = click;

var heads = 0;
var tails = 0;
var user = 0;
var output = 0;
var score = 0;

function op1() {
    document.getElementById("h-img").style.opacity = 1;
    user = heads;
}
function op2() {
    document.getElementById("t-img").style.opacity = 1;
    user = tails;
}
function click() {  
    x = (Math.floor(Math.random() * 2) == 0);
    document.getElementById("o-img").style.opacity = 1;
    if(x){
    	flip("Heads");
        
    }else{
        flip("Tails");
        
    }
    
};
function flip(coin) {
    document.getElementById("result").innerHTML = coin;
    if(user==x){
        score++;
        document.getElementById("pscore").innerHTML = score;
        document.getElementById("compare").innerHTML = "Correct";
    }else{
        document.getElementById("compare").innerHTML = "Wrong";
    }
};
