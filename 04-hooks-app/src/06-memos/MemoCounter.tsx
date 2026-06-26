import { useMemo } from 'react';
import { useCounter } from "@/hooks/useCounter"

const heavyStuff = (iterationNumber: number) => {
  console.time('Heavy_stuff_started');
  for (let index = 0; index < iterationNumber; index++) {
    console.log('ahi vamos...');
  }
  console.timeEnd('Heavy_stuff_started')

  return `${iterationNumber} iteraciones realizadas`;
}

export const MemoCounter = () => {

  const { counter, increaseBy } = useCounter(40_000);

  const heavyValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Memo - useMemo - {heavyValue}</h1>
      <hr />
      <h4>Counter: {counter}</h4>
      <h4>Counter: {counter}</h4>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => increaseBy(1)}>+1</button>
    </div>
  )
}