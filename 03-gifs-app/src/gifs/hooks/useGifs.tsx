import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";


export const useGifs = () => {

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }
  }

  const handleSearch = async (query: string) => {

    const term = query.trim().toLowerCase();

    if (term.length <= 0) return;

    if (previousTerms.includes(term)) return;

    setPreviousTerms([term, ...previousTerms].splice(0, 3));

    const gifs = await getGifsByQuery(term);

    setGifs(gifs);

    gifsCache.current[term] = gifs;
  }
  return {
    gifs,
    previousTerms,
    handleSearch,
    handleTermClicked
  };
}