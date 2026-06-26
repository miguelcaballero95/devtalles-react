import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: 'Nintendo Switch 2', quantity: 1 },
  { productName: 'Pro Controller', quantity: 1 },
  { productName: 'Super Smash', quantity: 1 }
]

export function FirstStepsApp() {
  return (
    <>
      <h1>Hola Mundo!!</h1>
      <p>Esto es un parrafo</p>
      <button>Click me</button>
      <div>
        <h2>Hola dentro de un div</h2>
      </div>
      <h1>Carrito de compras</h1>
      {/* <ItemCounter name="Nintendo Switch 2" />
      <ItemCounter name="Pro Controller" />
      <ItemCounter name="Super Smash" /> */}
      {itemsInCart.map(item => <ItemCounter key={item.productName} name={item.productName} quantity={item.quantity} />)}
    </>
  );
}