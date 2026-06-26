import type { GiphyRandomResponse } from '../data/giphy.response';
const API_KEY = 'ZjxGpKx7R6RGPYIdLygKAhbwmxSfMFvb';

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/random/?api_key=${API_KEY}`);
  const data: GiphyRandomResponse = await response.json();
  return data.data.images.original.url;
}

console.log(await getRandomGifUrl());