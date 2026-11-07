/* ==========================================================================
   Omola Concept: lookbook lightbox (lookbook.html)
   Click a photo to see it large. Use the arrows or keyboard (← → Esc).
   ========================================================================== */

const photos = Array.from(document.querySelectorAll('[data-lightbox]'));
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
let current = 0;

function openLightbox(index) {
    current = (index + photos.length) % photos.length;
    const photo = photos[current];
    lightboxImage.src = photo.dataset.full;
    lightboxImage.alt = photo.querySelector('img').alt;
    lightboxCaption.textContent = photo.dataset.caption || '';
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
    document.getElementById('lightbox-close').focus();
}

function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = '';
    photos[current].focus();
}

photos.forEach((photo, index) => {
    photo.addEventListener('click', () => openLightbox(index));
});

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', () => openLightbox(current - 1));
document.getElementById('lightbox-next').addEventListener('click', () => openLightbox(current + 1));

// Clicking the dark background (not the photo) closes the lightbox.
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') openLightbox(current - 1);
    if (e.key === 'ArrowRight') openLightbox(current + 1);
});
