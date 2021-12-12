// author: forrestkirby https://github.com/forrestkirby
let vimPlayer = null,
	vimButton = null,
	vimRange = null,
	vimImage = null;

function switchVimButton(hasSound) {
	if (hasSound) {
		if (vimImage) {
			vimImage.src = 'images/speaker.svg';
			vimImage.alt = 'mute';
		} else {
			vimButton.innerHTML = 'mute';
		}
	} else if (vimImage) {
		vimImage.src = 'images/speaker_muted.svg';
		vimImage.alt = 'unmute';
	} else {
		vimButton.innerHTML = 'unmute';
	}
}

function toggleVimPlayerSound() {
	vimPlayer.getMuted().then(muted => {
		if (muted) {
			vimPlayer.setMuted(false).then(() => {
				switchVimButton(true);
			});
		} else {
			vimPlayer.setMuted(true).then(() => {
				switchVimButton(false);
			});
		}
	});
}

function setVimPlayerVolume(vol) {
	vimPlayer.setVolume(vol).then(volume => {
		vimPlayer.getMuted().then(muted => {
			if (muted) {
				vimPlayer.setMuted(false).then(muted => {
					switchVimButton(true);
				});
			}
		});
		if (volume != 0) {
			switchVimButton(true);
		}
	});
}

UIkit.util.ready(() => {
	vimButton = document.getElementById('vim-button'),
		vimRange = document.getElementById('vim-range'),
		vimImage = document.getElementById('vim-image');

	document.querySelector('#bgvideo iframe').id = 'vim-player';
	vimPlayer = new Vimeo.Player('vim-player');
});
