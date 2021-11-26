import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

let galleryContainer = document.querySelector('.gallery');

let galleryInnerContent = galleryItems.map(function (item) {
  return renderGalleryItems(item);
});

galleryContainer.innerHTML = galleryInnerContent.join('');

function renderGalleryItems(item) {
  return `<li>
         <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
         </a>
      </li>`;
}

const links = document.querySelectorAll('.gallery__item');

links.forEach(item => {
  let lightbox = new SimpleLightbox(item, {
    captionsData: 'alt',
    captionDelay: 250,
  });
  console.log(item.firstElementChild.getAttribute('alt'));
});
