import axios from 'axios';

async function fetchImageByRequest(userRequest, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '39697494-c4b1e462fd481af5f94407ae2';
  const options = {
    key: KEY,
    q: userRequest,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
  };

  //   const response = await axios.get(BASE_URL, { options });

  const response = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${userRequest}&per_page=40&image_type=photo&orientation=horizontal&safesearch=true&page=${page}`,
    options
  );
  console.log(response);
  return response;
}
export { fetchImageByRequest };
