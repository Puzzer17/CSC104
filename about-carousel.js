document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('staff-carousel');
    const storyElement = document.getElementById('staff-story');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    const stories = [
        "Our team is the heart of Warm & Brewed. From our talented baristas to our dedicated kitchen staff, each member brings their unique passion and skills to create the warm, inviting atmosphere we're known for.",
        "John, our master roaster, has a nose for the perfect blend. His dedication to sourcing the finest beans and creating unique roasts has put Warm & Brewed on the map for coffee enthusiasts.",
		"Meet Sarah, our head barista. With over a decade of experience, she's a true coffee artisan. Her latte art is legendary, and her warm smile brightens everyone's day.",
        "Behind the scenes, our kitchen team works tirelessly to create the delicious pastries and snacks that pair perfectly with our coffee. Led by Chef Maria, they're always experimenting with new flavors and local ingredients."
    ];

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
        storyElement.innerHTML = `<p>${stories[currentIndex]}</p>`;
    }

    setInterval(showNextImage, 5000); // Change image every 5 seconds
});