import axios from 'axios';
import iziToast from 'izitoast';

const apiKey = "48580405-254aeb3d0592dc0b65db12949";
const perPage = 20; // Количество изображений на странице
let currentPage = 1;
let currentQuery = "";

export async function fetchImages(query, renderGallery) {
  if (query !== currentQuery) {
    currentPage = 1;
    currentQuery = query;
  }
  try {
    const response = await axios.get("https://pixabay.com/api/", {
      params: {
        key: apiKey,
        q: query,
        min_width: 360,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: perPage,
        page: currentPage,
      },
    });


    const data = response.data;

    if (data.hits.length === 0 && currentPage === 1) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    renderGallery(data.hits, currentPage, perPage,  data.total);
  } catch (error) {
    console.log(error)
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  }
}

// Функция для загрузки следующей страницы
export function loadMore(renderGallery) {

  currentPage++;
  fetchImages(currentQuery, renderGallery);
}
