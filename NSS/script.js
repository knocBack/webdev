let StartInterval;
let time_elapsed = document.getElementById("time");
let start_btn = document.getElementById("start");
let stop_btn = document.getElementById("stop");
let pause_btn = document.getElementById("pause");
let lap_btn = document.getElementById("lap");
let laps = document.getElementById("laps");

let hours = 0;
let minutes = 0;
let seconds = 0;
let millis = 0;
let time = "00:00:00:000";
let running = false;

function Start() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    millis = 0;
    time = "00:00:00:000";
    running = true;
}

function StopWatch(){
    time = "";
    if(running){
        if(millis>999){
            seconds += 1;
            millis = 0;
        }
        if(seconds>59){
            minutes += 1;
            seconds = 0;
        }
        if(minutes>59){
            hours += 1;
            minutes = 0;
        }
        millis += 1;
    }
    if(hours < 10){
        time += "0";
    }
    time += hours.toString() + ":";
    if(minutes < 10){
        time += "0";
    }
    time += minutes.toString() + ":";
    if(seconds<10){
        time += "0";
    }
    time += seconds.toString() + ":";
    if(millis < 10){
        time = time + "00";
    }
    else if(millis < 100 ){
        time = time + "0";
    }
    time += millis.toString();
    document.getElementById("time").innerText = time;
}

function Stop() {
    running = false;
    clearInterval(StartInterval);
    document.getElementById("laps").innerHTML = '';
}

$("#start").on("click",function(){
    Start();
    StartInterval = setInterval(StopWatch, 1);
});

$("#stop").on("click",function(){
    Stop();
    clearInterval(StartInterval);
});

$("#pause").on("click",function(){
    running = !running;
});

$("#lap").on("click",function(){
    addLap(time);
});

function addLap(text) { 
    var h = document.createElement("h3"); 
    var t = document.createTextNode(text); 
    h.appendChild(t); 
    document.getElementById("laps").appendChild(h); 
}