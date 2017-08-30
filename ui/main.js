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

var button = document.getElementById('RefreshCounter');
var RefreshCounter = 0;
button.onclick = function() {
    RefreshCounter= RefreshCounter + 1;
    var span= document.getElementById('count');
    span.innerHTML = counter.toString();
    
};



