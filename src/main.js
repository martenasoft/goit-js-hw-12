import {fetchImages} from './js/pixabay-api.js'
import "izitoast/dist/css/iziToast.min.css";
import renderGallery from './js/render-functions.js'

const form = document.getElementById("searchForm");

form.addEventListener("submit", async (event) => {

  const searchQuery = document.getElementById("searchQuery");
  const submitButton = document.getElementById("submitButton");
  const loader = document.getElementById("loader");
  const gallery = document.getElementById("gallery");

  event.preventDefault();
  const query = searchQuery.value.trim();

  if (query) {
    loader.style.display = 'block';
    gallery.style.display = 'none';

    submitButton.disabled = searchQuery.disabled = true;
    await fetchImages(query, renderGallery);
    submitButton.disabled = searchQuery.disabled = false;
    loader.style.display = 'none';
    gallery.style.display = 'flex';
  }

});

