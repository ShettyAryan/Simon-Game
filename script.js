let gamePattern =[];
let userClickedPattern = [];
let buttonColors = ["red","blue","green","yellow"];

let started =false;
let level = 0;

$(document).keydown(function() {
    if(!started)
    {$("h1").text("Level "+level);
    nextSequence();
    started=true;
}
});



$(".btn").click(function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
    
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);
    }}
    else{
        playSound("wrong");
        $("h1").text("Wrong! Press any key to restart");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");    
        },200)
        startOver();
        console.log("Wrong");
    }
}
function startOver(){
    level =0;
    gamePattern = [];
    started = false;
}
function playSound(name){
    let sound = new Audio("./sounds/"+name+".mp3");
    sound.play();
}

function nextSequence(){
    userClickedPattern = [];
    $("h1").text("Level "+ level);
    level++;
let randomNumber = Math.floor(Math.random()*4);
let randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);


};
function animatePress(currentColor){
$("#"+currentColor).addClass("pressed");
setTimeout(() => {
    $("#"+currentColor).removeClass("pressed"); 
}, 100);
}



