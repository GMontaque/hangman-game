// play and stop music

let musicStart = document.getElementById("play-btn");
let musicStop = document.getElementById("stop-btn");
musicStart.addEventListener("click", play);
musicStop.addEventListener("click", stop);
let mySound = new Audio("../assests/audio/gameplay-soundtrack.mp3");

function play() {
	console.log("sound");
	mySound.play();
}

function stop() {
	console.log("sound stop");
	mySound.pause();
}

// stop watch function
let seconds = 0;
let tens = 0;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let buttonStop = document.getElementById("button-stop");
let Interval;

// buttonStart.onclick = function () {
// 	clearInterval(Interval);
// 	Interval = setInterval(startTimer, 10);
// };

buttonStop.onclick = function () {
	clearInterval(Interval);
	// reset stop watch
	clearInterval(Interval);
	tens = "00";
	seconds = "00";
	appendTens.innerHTML = tens;
	appendSeconds.innerHTML = seconds;
};

function startTimer() {
	tens++;

	if (tens <= 9) {
		appendTens.innerHTML = "0" + tens;
	}

	if (tens > 9) {
		appendTens.innerHTML = tens;
	}

	if (tens > 99) {
		seconds++;
		appendSeconds.innerHTML = "0" + seconds;
		tens = 0;
		appendTens.innerHTML = "0" + 0;
	}

	if (seconds > 9) {
		appendSeconds.innerHTML = seconds;
	}
}

// alphabet letters
let buttonA = document.getElementById("letterA");
buttonA.addEventListener("click", startGame);

// starts game
function startGame() {
	clearInterval(Interval);
	Interval = setInterval(startTimer, 10);
	let wordLength = document.getElementById("guess-word");
	console.log(wordLength.value);
}
