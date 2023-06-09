
const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');
const buttonStart = document.getElementById('btn-start');
const buttonStop = document.getElementById('btn-stop');
const buttonReset = document.getElementById('btn-reset');

let seconds = 00;
let tens = 00;
let interval; //store timer values

// clicking - start timer
function startTimer() {
    tens++;
    if(tens < 9) {
        // appendTens.innerHTML = "0" + tens; 
        appendTens.innerHTML = `0${tens}`; 
    }
    if(tens > 9) {
        appendTens.innerHTML = tens;
    }
    if(tens > 99) {
        seconds++;
        // appendSeconds.innerHTML = "0" + seconds;
        appendSeconds.innerHTML = `0${seconds}`;
        tens = 0;
        appendTens.innerHTML = "0" + 0; 
    }
    if(seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}

buttonStart.onclick = function() {
    // The setInterval() method calls a function at specified intervals (in milliseconds).
    interval = setInterval(startTimer); 
};

buttonStop.onclick = function() {
    // The setInterval() method continues calling the function until clearInterval() is called, or the window is closed
    clearInterval(interval);
};

buttonReset.onclick = function() {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}

