import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {

  const [counter, setCounter] = useState(initialValue);

  const increaseBy = (value: number) => {
    setCounter(value + counter);
  }

  const reset = () => {
    setCounter(initialValue);
  }

  return {
    counter,
    increaseBy,
    reset
  };
}