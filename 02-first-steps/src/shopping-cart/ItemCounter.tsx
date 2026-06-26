import { useState } from "react";

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 0 }: Props) => {

  const [count, setCount] = useState<number>(quantity)

  const handleClick = (increase: number) => {
    setCount(count + increase)
  }

  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 10
    }}>
      <span>{name}</span>
      <button onClick={() => handleClick(1)}>+1</button>
      <span>{count}</span>
      <button onClick={() => handleClick(-1)}>-1</button>
    </section>
  )
}