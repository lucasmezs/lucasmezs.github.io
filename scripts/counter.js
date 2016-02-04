var milisec = 0
var seconds = 26
document.getElementById("counter").innerHTML = '26';

function display() {
    if (milisec <= 0) {
        milisec = 9
        seconds -= 1
    }
    if (seconds <= -1) {
        milisec = 0
        seconds += 1
    }
    else
        milisec -= 1
    document.getElementById("counter").innerHTML = seconds;
    setTimeout("display()", 100)
}
display()