import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryListEl.addEventListener('click', onGalleryImgClick);
galleryListEl.insertAdjacentHTML('afterbegin', galleryMarkup);


function createGallery(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    }).join('');
}; 

function onGalleryImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
};
 const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });