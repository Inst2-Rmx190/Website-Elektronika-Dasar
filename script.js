console.log('Hello World!');

// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});



// Mendapatkan elemen-elemen yang dibutuhkan
const videoLink = document.getElementById('video-link');
const videoBtn = document.getElementById('video-btn');
const videoContainer = document.getElementById('video-container');
const video = document.getElementById('video');

// Mengatur tindakan ketika tombol video diklik
videoBtn.addEventListener('click', function(event) {
	event.preventDefault(); // Mencegah tindakan default dari tautan
	videoLink.style.display = 'none'; // Sembunyikan tautan
	videoContainer.style.display = 'block'; // Tampilkan kontainer video
	const videoSrc = videoLink.getAttribute('href'); // Ambil sumber video dari atribut href tautan
	video.src = videoSrc; // Mengatur sumber video
	video.play(); // Memutar video secara otomatis
});



let isLiked = false;
let likeCount = 0;

function likeVideo() {
	if (isLiked) {
		likeCount--;
		document.getElementById('like-count').innerText = likeCount + ' Likes';
		isLiked = false;
	} else {
		likeCount++;
		document.getElementById('like-count').innerText = likeCount + ' Likes';
		isLiked = true;
		animateButton('like-button');
	}
}

function shareVideo() {
	// Implement share functionality here
	alert("Share functionality is not implemented yet.");
}

function animateButton(buttonId) {
	const button = document.getElementById(buttonId);
	button.classList.add('liked');
	setTimeout(() => {
		button.classList.remove('liked');
	}, 1000);
}


//fitur lanjutan validasi logoka sederhana

