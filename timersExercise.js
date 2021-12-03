function countDown(num) {
	const intervalID = setInterval(function () {
		console.log(num);
		num--;
		if (num <= 0) {
			clearInterval(intervalID);
			setTimeout(function () {
				console.log("DONE!");
			}, 1000);
		}
	}, 1000);
}

function randomGame() {
	let counter = 0;
	const intervalID = setInterval(function () {
		counter++;
		let randomNumber = Math.random();
		if (randomNumber > 0.75) {
			clearInterval(intervalID);
			console.log("Number of tries:", counter);
		}
	}, 1000);
}
