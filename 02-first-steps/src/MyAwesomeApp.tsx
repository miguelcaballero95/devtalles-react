// If the values are not changing, we can declare them outside the component, 
// so they are not re-created on every render.

import type { CSSProperties } from "react";

const firstName = 'Miguel';
const lastName = 'Caballero';
const favoriteGames = ['The Legend of Zelda', 'Super Mario Bros', 'Minecraft'];
const isActive = true;
const address = {
  street: 'Calle Falsa',
  number: 123,
  city: 'Springfield',
  country: 'USA',
}

const myStyles: CSSProperties = {
  backgroundColor: 'red',
  borderRadius: isActive ? '10px' : '0',
  padding: 10
}

export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>
      <p>{favoriteGames.join(', ')}</p>
      <h1>{isActive ? 'Activo' : 'Inactivo'}</h1>
      <p
        style={myStyles}
      >{JSON.stringify(address, null, 2)}</p>
    </>
  );
}