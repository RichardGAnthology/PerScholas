var startTime;
var limite;
var temporizador;
var minutos;
var segundos;


function submission() {
	
    const min = document.getElementsByClassName("input")[0].value;
    const sec = document.getElementsByClassName("input")[1].value;
	
	document.getElementById("center").style.display = "none";
	limite = parseFloat(min + sec / 60);

	"use strict";

	startTime = new Date();

	temporizador = setInterval(updateTime, 1000);
}

function updateTime() {
	"use strict";

	var currentTime = new Date();

	var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

	minutos = Math.floor(elapsed / 60);
	segundos = Math.floor(elapsed % 60);

	if (minutos < 10) {
		minutos = "0" + minutos;
	}
	if (segundos < 10) {
		segundos = "0" + segundos;
	}
	
	document.getElementById("time").innerHTML = minutos + ":" + segundos;

	if (minutos+segundos/60 >= limite) {
		
        document.getElementById("circle").style.backgroundColor = "red";
        document.getElementById("reset").style.backgroundColor = "red";
		document.getElementById("images").style.visibility = "visible"
		clearInterval(temporizador);
	} else {
		document.getElementById("circle").style.backgroundColor = "#52b0ee";
	}

}

function reset() {
	if (minutos+segundos/60 >= 0) {

		clearInterval(temporizador);
		
		document.getElementById("center").style.display = "block";
		document.getElementById("time").innerHTML = ""
		document.getElementById("circle").style.backgroundColor = "#52b0ee";
		document.getElementById("reset").style.backgroundColor = "#7fe000";
		document.getElementById("images").style.visibility = "hidden"
	}
}

function handle(){
    var key=event.keyCode;
    var min = document.getElementById("minutes") 
    var sec = document.getElementById("seconds") 
    var time = document.getElementById("time")
        if (min.value == "" && sec.value == "" && key==13) {
            time.innerHTML = "Enter time"
        } else if (key==13){
        submission();
        }
    }