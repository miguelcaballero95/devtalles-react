import type { GiphyRandomResponse } from '../data/giphy.response';
const API_KEY = 'ZjxGpKx7R6RGPYIdLygKAhbwmxSfMFvb';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random/?api_key=${API_KEY}`);

myRequest.then(response => response.json())
  .then((data: GiphyRandomResponse) => {
    const imageUrl = data.data.images.original.url;
    console.log(imageUrl);
  })
  .catch(e => {
    console.error(e)
  })