const images = document.querySelectorAll('.gallery img');
const overlay = document.querySelector('.overlay');
const overlayImg = document.querySelector('.overlay-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Open overlay on image click
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage();
        overlay.classList.remove('hidden');
    });
});

// Show image in overlay
function showImage() {
    overlayImg.src = images[currentIndex].src;
}

// Close overlay
closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
});

// Navigate to previous image
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

// Navigate to next image
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

// Close overlay when clicking outside the image
overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === overlayImg) {
        overlay.classList.add('hidden');
    }
});

// Keyboard navigation for images (left/right arrow keys)
document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft") {
        prevBtn.click();
    } else if (e.key === "ArrowRight") {
        nextBtn.click();
    }
});
