function loading_images() {

	const bgImageArray = ["1", "2", "3", "4", "5", "6", "7"],
		base = "img/";
		secs = 4;
	bgImageArray.forEach(function (img) {
		new Image().src = base + img;

	});

	function backgroundSequence() {
		window.clearTimeout();
		let k = 0;
		for (let i = 0; i < bgImageArray.length; i++) {
			setTimeout(function () {
				document.getElementById('animated-bg').style.background = " url(" + base + bgImageArray[k] + ".jpg) no-repeat";
				document.getElementById('animated-bg').style.backgroundSize = "cover";
				document.getElementById('animated-bg').style.width = "100%";
				document.getElementById('animated-bg').style.height = "100%";
				if ((k + 1) === bgImageArray.length) {
					setTimeout(function () {
						backgroundSequence()
					}, (secs * 1000))
				} else {
					k++;
				}
			}, (secs * 1000) * i)
		}
	}

	backgroundSequence();
}

window.onload=loading_images;