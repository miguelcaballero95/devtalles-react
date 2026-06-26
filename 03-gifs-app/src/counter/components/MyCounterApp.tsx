import { useCounter } from "../hooks/useCounter"

export const MyCounterApp = () => {

  const { counter, increaseBy, reset } = useCounter(2);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1>Counter {counter}</h1>
      <div>
        <button onClick={() => increaseBy(1)}>+1</button>
        <button onClick={() => increaseBy(-1)}>-1</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  )
}