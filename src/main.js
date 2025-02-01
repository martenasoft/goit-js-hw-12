import {fetchImages, loadMore} from './js/pixabay-api.js'
import "izitoast/dist/css/iziToast.min.css";
import renderGallery from './js/render-functions.js'

const form = document.getElementById("searchForm");

const loadMoreButton = document.getElementById("loadMore");
form.addEventListener("submit", async (event) => {

  const searchQuery = document.getElementById("searchQuery");
  const submitButton = document.getElementById("submitButton");
  const gallery = document.getElementById("gallery");

  event.preventDefault();
  const query = searchQuery.value.trim();

  if (query) {
    gallery.style.display = 'none';
    submitButton.disabled = searchQuery.disabled = true;
    await fetchImages(query, renderGallery);
    submitButton.disabled = searchQuery.disabled = false;
    gallery.style.display = 'flex';

  }

});

loadMoreButton.addEventListener("click", () => loadMore(renderGallery));


