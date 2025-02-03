import axios from 'axios';

const apiKey = "48580405-254aeb3d0592dc0b65db12949";
const perPage = 20; // Количество изображений на странице
let currentPage = 1;


export default async function fetchImages(query, isClear = false) {
/*  if (query !== currentQuery) {
    currentPage = 1;
    currentQuery = query;
    gallery.clear(false);
  }

  gallery
    .loadMore(false)
    .loaderLabel(false)
  ;*/

  if (isClear) {
    currentPage = 1;
  }


  return await axios.get("https://pixabay.com/api/", {
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
  }).then((response) => {
    ++currentPage;
    return {
      response,
      currentPage,
      perPage
    };
  });
/*
  try {
   // gallery.loaderLabel(true);

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

/!*    const data = response.data;

    if (data.hits.length === 0 && currentPage === 1) {
      gallery
        .loaderLabel(false);

      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });

      return;
    }

    gallery
      .loaderLabel(false)
      .loadMore((currentPage * perPage) < data.total)
      .render(data.hits);*!/

    currentPage++;

  } catch (error) {

    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  }*/
}
