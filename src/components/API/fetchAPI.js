import axios from 'axios';
//<------------------------------------------------------------
// async function fetchAPI(searchQuery, page = 1) {
//   const MY_API_KEY = '40227453-3557d8d2139416ae0b447ea7a';
//   const URL = 'https://pixabay.com/api/';
//   const params = {
//     q: searchQuery,
//     key: MY_API_KEY,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 12,
//     page,
//   };

//   return fetch(
//     `https://pixabay.com/api/?q=cat&page=${page}&key=${MY_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//     }

//     return Promise.reject(new Error(`...........`));
//   });
// }
// const api = {
//   fetchAPI,
// };

// export default api;

//<------------------------------------------------------------
async function fetchAPI(searchQuery, page = 1) {
  const MY_API_KEY = '40227453-3557d8d2139416ae0b447ea7a';
  const URL = 'https://pixabay.com/api/';
  const params = {
    q: searchQuery,
    key: MY_API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page,
  };

  try {
    const response = await axios(`${URL}`, { params });
    const data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
}
export default fetchAPI;
