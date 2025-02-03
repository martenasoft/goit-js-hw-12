import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';

class Gallery {

  constructor(gallery, loader, loadMoreButton) {
    this.gallery = gallery;
    this.loader = loader;
    this.loadMoreButton = loadMoreButton;
  }

  render(images) {

    let item = '';
    images.forEach((image) => {
      item += this.template(image);
    });

    this.append(item);

    const lightbox = new SimpleLightbox('.gallery-item a', {
      captionsData: 'alt',
      captionDelay: 250,
    });

    return this;
  }

  scroll() {
    const galleryCard = document.getElementById('gallery');

    const rect = galleryCard.getBoundingClientRect();
    //window.scrollBy(0, rect.height * 2);
    window.scrollTo({
      top: rect.height * 2,
      behavior: "smooth"
    });
  }

  clear() {
    this.gallery.innerHTML = '';
    return this;
  }

  append(value) {
    this.gallery.innerHTML += value;
    return this;
  }

  loaderLabel(isShow = false) {
    this.loader.style.display = isShow ? 'block' : 'none';
    return this;
  }
  loadMore(isShow = false) {
    this.loadMoreButton.style.display = isShow ? 'block' : 'none';
    return this;
  }

  template(image) {
    return `<li class="gallery-item">
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
  }
}


export default Gallery;