document.querySelectorAll(".drum")[0].addEventListener("click", function() {
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play();
});
document.querySelectorAll(".drum")[1].addEventListener("click", function() {
    var audio = new Audio("sounds/tom-2.mp3")
    audio.play();
});
document.querySelectorAll(".drum")[2].addEventListener("click", function() {
    var audio = new Audio("sounds/tom-3.mp3")
    audio.play();
});
document.querySelectorAll(".drum")[3].addEventListener("click", function() {
    var audio = new Audio("sounds/tom-4.mp3")
    audio.play();
});
document.querySelectorAll(".drum")[4].addEventListener("click", function() {
    var audio = new Audio("sounds/snare.mp3")
    audio.play();
});
document.querySelectorAll(".drum")[5].addEventListener("click", function() {
    var audio = new Audio("sounds/crash.mp3")
    audio.play();
});
document.querySelectorAll(".drum")[6].addEventListener("click", function() {
    var audio = new Audio("sounds/kick-bass.mp3")
    audio.play();
});
document.addEventListener("keydown",function(Event) {
    makeSound(Event.key);
});
function makeSound(key1){
    switch(key1) {
    case 'w':{
        var audio = new Audio("sounds/tom-1.mp3")
        audio.play();
    }
    case 'a':{
        var audio = new Audio("sounds/tom-2.mp3")
        audio.play();
    }
    case 's':{
        var audio = new Audio("sounds/tom-3.mp3")
        audio.play();
    }
    case 'd':{
        var audio = new Audio("sounds/tom-4.mp3")
        audio.play();
    }
    case 'j':{
        var audio = new Audio("sounds/snare.mp3")
        audio.play();
    }
    case 'k':{
        var audio = new Audio("sounds/crash.mp3")
        audio.play();
    }
    case 'l':{
        var audio = new Audio("sounds/kick-bass.mp3")
        audio.play();
    }
    }
}