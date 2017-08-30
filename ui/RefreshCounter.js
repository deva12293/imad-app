var button = document.getElementById('RefreshCounter');
var RefreshCounter = 0;
button.onclick = function() {
    RefreshCounter= RefreshCounter + 1;
    var span= document.getElementById('count');
    span.innerHTML = counter.toString();
    
};


