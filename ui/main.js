console.log('Loaded!');


var img= document.getElementById('deva');

var marginLeft = 0;

function moveRight () {
    marginLeft= marginLeft + 1;
    img.style.marginLeft= marginLeft + 'px';
}

img.onclick = function () {
var interval = setInterval(moveRight, 1);
};



var img= document.getElementById('maa');

var marginLeft = 0;

function moveRight () {
    marginLeft= marginLeft + 1;
    img.style.marginLeft= marginLeft + 'px';
}

img.onclick = function () {
var interval = setInterval(moveRight, 1);
};
