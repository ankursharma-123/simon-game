
var gamePattern = [];
var buttons = ["blue" , "green" , "red" , "yellow"];
var userclickPattern = [];

var started = false;var level = 0;
$(".btn").on("click",function(){
    var usercolor = $(this).attr("id");
    userclickPattern.push(usercolor);
    $("#"+usercolor).fadeOut(100).fadeIn(100);
    playSound(usercolor);
    checkanswer(userclickPattern.length-1);
});
function newSequence(){
    userclickPattern = [];
    level++;
    $("#level-title").text("Level "+ level);
    var rand = Math.floor(Math.random()*4);
    gamePattern.push(buttons[rand]);
    var randomColor = buttons[rand];
    $("#"+randomColor).fadeOut(200).fadeIn(200);
    playSound(randomColor)
}
$(document).on("keydown",function(){
    if(!started){
      $("#level-title").text("Level "+ level);
      newSequence();
    }    
       
})
function checkanswer(currlen){
    var len = gamePattern.length;
    if(userclickPattern[currlen]===gamePattern[currlen]){
        if(userclickPattern.length===gamePattern.length){
            setTimeout(newSequence,1000);
        }
    }
    else{
       playSound("wrong");
       $("body").addClass("game-over");
       $("#level-title").text("Game over,press any key to restrat");
       setTimeout(function(){
        $("body").removeClass("game-over")
       },100);
       startover();
    }
    
}
function playSound(currentval){
    var audi = new Audio("sounds/"+currentval+".mp3");
    audi.play();
}
function startover(){
    started = false;
    level = 0;
    gamePattern = [];
}
