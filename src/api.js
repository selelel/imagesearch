import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization : 'Client-ID D42Aob5rrxMt8CKXCiqgKaoGhnftq2yL6j_NUKQwpHE',
    },
    params: {
      query: term,
    },
  });
  console.log(response.data.results);
  return response.data.results;

};
export default searchImages;


