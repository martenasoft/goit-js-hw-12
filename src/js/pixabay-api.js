import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";




export async function fetchImages(query, renderGallery) {
  const apiKey = "48580405-254aeb3d0592dc0b65db12949"; // Замініть на ваш ключ API Pixabay
  try {
    const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&min_width=360&image_type=photo&orientation=horizontal&safesearch=true`);
    const data = await response.json();

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  }
}