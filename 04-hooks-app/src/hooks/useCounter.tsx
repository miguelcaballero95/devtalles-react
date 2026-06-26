import { useState } from "react";

export const useCounter = (initialValue: number = 1) => {

  const [counter, setCounter] = useState(initialValue);

  const increaseBy = (value: number) => {
    setCounter(counter + value);
  }

  return {
    counter,
    increaseBy
  };
}