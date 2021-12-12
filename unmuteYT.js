// author: forrestkirby https://github.com/forrestkirby
let ytPlayer = null,
	ytButton = null,
	ytRange = null,
	ytImage = null;

function onYouTubeIframeAPIReady() {
	ytPlayer = new YT.Player('yt-player');
}

function switchYtButton(hasSound) {
	if (hasSound) {
		if (ytImage) {
			ytImage.src = 'images/speaker.svg';
			ytImage.alt = 'mute';
		} else {
			ytButton.innerHTML = 'mute';
		}
	} else if (ytImage) {
		ytImage.src = 'images/speaker_muted.svg';
		ytImage.alt = 'unmute';
	} else {
		ytButton.innerHTML = 'unmute';
	}
}

function toggleYtPlayerSound() {
	if (ytRange.value == 0) {
		ytPlayer.setVolume(50);
		ytRange.value = 50;
	}
	if (ytPlayer.isMuted()) {
		ytPlayer.unMute();
		switchYtButton(true);
	} else {
		ytPlayer.mute();
		switchYtButton(false);
	}
}

function setYtPlayerVolume(vol) {
	ytPlayer.setVolume(vol);
	if (ytPlayer.isMuted()) {
		ytPlayer.unMute();
		switchYtButton(true);
	}
	if (vol == 0) {
		ytPlayer.mute();
		switchYtButton(false);
	}
}

UIkit.util.ready(() => {
	ytButton = document.getElementById('yt-button'),
		ytRange = document.getElementById('yt-range'),
		ytImage = document.getElementById('yt-image');

	document.querySelector('#bgvideo iframe').id = 'yt-player';
});
