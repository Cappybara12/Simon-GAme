var b=0;

document.addEventListener("keydown",function(){
    b=1;
    $("h1").text("lets go!");
})
var blue_auto=0;
var green_auto=0;
var yellow_auto=0;
var red_auto=0;
var blue_man=0;
var green_man=0;
var yellow_man=0;
var red_man=0;
$("button").click(function(){
    var buttonInnerHTML=this.innerHTML;
        // here we assign the value of the button which is clicked...this ks for click
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
})
var a =Math.floor((Math.random()*4)+1);
if(a==1){
    var key1="blue";
    makesound(key1);
    buttonAnimation(key1);
    blue_auto+=1;
}
else if(a==2){
    var key1="green";
    makesound(key1);
    buttonAnimation(key1);
    green_auto+=1;
}
else if(a==3){
    var key1="red";
    makesound(key1);
    buttonAnimation(key1);
    red_auto+=1;
}
else if(a==4){
    var key1="yellow";
    makesound(key1);
    buttonAnimation(key1);
    yellow_auto+=1;
}
// looop start here
while(blue_auto==blue_man && green_auto==green_man && red_auto==red_man && yellow_auto==yellow_man){
var pick=Math.floor((Math.random()*4)+1);
var no_times=Math.floor((Math.random()*4)+1);
if(pick==1){
    var key2="blue";
    blue_auto=blue_auto+no_times;
}
else if(pick==2){
    var key2="green";
    green_auto=green_auto+no_times;
}
else if(pick==3){
    var key2="red";
    red_auto=red_auto+no_times;
}
else if(pick==4){
    var key2="yellow";
    yellow_auto=yellow_auto+no_times;
}
for (let i = 0; i < no_times; i++) {
    makesound(key2);
    buttonAnimation(key2);
}
}
function makesound(key){
    switch (key) {
        case "blue":
            var blue=new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            var green=new Audio("sounds/green.mp3");
            green.play();
        break;
        case "red":
            var red =new Audio("sounds/red.mp3");
            red.play();
        break;
        case "yellow":
            var yellow=new Audio("sounds/yellow.mp3");
            yellow.play();
        break;
        default:
            console.log(key);
        break;
    }
}
function buttonAnimation(currentkey){
    var activeButton=document.querySelector("#"+currentkey);
    $(activeButton).addClass("pressed");
    setTimeout(function(){
        $(activeButton).removeClass("pressed");
    },100);
}


