import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.css";
export default function renderGallery(images) {
  const gallery = document.getElementById("gallery");

  let item = '';
  images.forEach(image => {

    item += `<li class="gallery-item">
                <a href="${image.largeImageURL}" >
                  <img src="${image.webformatURL}" alt="${image.tags}" data-source="${image.largeImageURL}">
                </a>
                <ul class="gallery-info">
                    <li class="gallery-info-item">
                        <p class="gallery-item-title">Likes</p>
                        <p class="gallery-item-value">${image.likes}</p>
                    </li>
                    <li class="gallery-info-item">
                        <p class="gallery-item-title">Views</p>
                        <p class="gallery-item-value">${image.views}</p>
                    </li>
                      <li class="gallery-info-item">
                        <p class="gallery-item-title">Comments</p>
                        <p class="gallery-item-value">${image.comments}</p>
                    </li>
                      <li class="gallery-info-item">
                        <p class="gallery-item-title">Downloads</p>
                        <p class="gallery-item-value">${image.downloads}</p>
                    </li>
                </ul>

            </li>`;
  });

  gallery.innerHTML = item;

  const lightbox = new SimpleLightbox('.gallery-item', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}