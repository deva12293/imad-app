console.log('Loaded!');


var img= document.getElementById('deva');

var marginLeft = 30 ;

function moveRight () {
    marginLeft= marginLeft + 50;
    img.style.marginLeft= marginLeft + 'px' ;
}

img.onclick = function () {
var interval= setInterval(moveRight,100);
};