import { useCounter } from "../hooks/useCounter";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonPage = () => {

  const { counter, increaseBy } = useCounter();
  const { pokemon } = usePokemon({ id: counter });

  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">#{counter} {pokemon?.name}</h3>
      <img
        src={pokemon?.imageUrl}
        alt=""
      />

      <div className="flex gap-2">

        <button
          onClick={() => increaseBy(-1)} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
          Anterior
        </button>

        <button onClick={() => increaseBy(1)} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
          Siguiente
        </button>

      </div>
    </div>
  );
};