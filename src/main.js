import fetchImages from './js/pixabay-api.js';
import 'izitoast/dist/css/iziToast.min.css';
import Gallery from './js/render-functions.js';
import iziToast from 'izitoast';


const form = document.getElementById('searchForm');
const gallery = new Gallery(
  document.getElementById('gallery'),
  document.getElementById('loader'),
  document.getElementById('loadMore'),
);

let currentQuery = '';

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  let query = document.getElementById('searchQuery').value.trim();
  let isClear = (query !== currentQuery);
  if (isClear) {
    currentQuery = query;
    gallery.clear(false);
  }

  gallery
    .loadMore(false)
    .loaderLabel(true)
  ;

  fetchImages(query, isClear)
    .then((result) => {

      gallery
        .loaderLabel(false)
        .loadMore(((result.currentPage - 1) * result.perPage) <= result.response.data.total)
        .render(result.response.data.hits)
        .scroll()
      ;

      if (result.response.data.total === 0 && isClear) {
        gallery
          .loaderLabel(false);

        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });

        return;
      }

    }).catch(error => {
    gallery.loaderLabel(false);
    const message = error.message !== undefined ? error.message : 'Something went wrong. Please try again later.';

    iziToast.error({
      title: 'Error',
      message: message,
    });
  });

});
