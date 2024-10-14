document.addEventListener('DOMContentLoaded', function() {
    const carousels = {
        'fun-visits': document.getElementById('fun-visits-carousel'),
        'staff-picks': document.getElementById('staff-picks-carousel'),
        'renowned-meals': document.getElementById('renowned-meals-carousel')
    };

    let currentIndexes = {
        'fun-visits': 0,
        'staff-picks': 0,
        'renowned-meals': 0
    };

    function showImage(carouselId, index) {
        const images = carousels[carouselId].querySelectorAll('img');
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function nextImage(carouselId) {
        const images = carousels[carouselId].querySelectorAll('img');
        currentIndexes[carouselId] = (currentIndexes[carouselId] + 1) % images.length;
        showImage(carouselId, currentIndexes[carouselId]);
    }

    function prevImage(carouselId) {
        const images = carousels[carouselId].querySelectorAll('img');
        currentIndexes[carouselId] = (currentIndexes[carouselId] - 1 + images.length) % images.length;
        showImage(carouselId, currentIndexes[carouselId]);
    }

    // Set up interval to change images every 5 seconds
    Object.keys(carousels).forEach(carouselId => {
        setInterval(() => nextImage(carouselId), 7500);
    });
});