import axios from 'axios';

const apiKey = "48580405-254aeb3d0592dc0b65db12949";
const perPage = 20; // Количество изображений на странице
let currentPage = 1;


export default async function fetchImages(query, isClear = false) {

  if (isClear) {
    currentPage = 1;
  }

  if (query === '') {
    throw { message: 'Query could not be empty' };
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

}
