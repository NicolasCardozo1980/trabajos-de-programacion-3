// Código TypeScript
window.addEventListener('DOMContentLoaded', function () {
    var gallerySection = document.getElementById('gallery');
    var imageGallery = gallerySection === null || gallerySection === void 0 ? void 0 : gallerySection.querySelector('.image-gallery');
    if (gallerySection && imageGallery) {
        // Fetch images from the server or load them statically
        var images = [
            'image1.jpg',
            'image2.jpg',
            'image3.jpg'
        ];
        // Generate image elements and append them to the gallery
        images.forEach(function (imageSrc) {
            var img = document.createElement('img');
            img.src = imageSrc;
            img.alt = 'Gallery Image';
            img.classList.add('img-thumbnail');
            imageGallery.appendChild(img);
        });
    }
});
