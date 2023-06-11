// Código TypeScript
window.addEventListener('DOMContentLoaded', () => {
  const gallerySection = document.getElementById('gallery');
  const imageGallery = gallerySection?.querySelector('.image-gallery');

  if (gallerySection && imageGallery) {
    // Fetch images from the server or load them statically
    const images = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg'
    ];

    // Generate image elements and append them to the gallery
    images.forEach(imageSrc => {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = 'Gallery Image';
      img.classList.add('img-thumbnail');
      imageGallery.appendChild(img);
    });
  }
});
