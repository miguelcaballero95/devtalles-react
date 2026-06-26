import { heroes, Owner, type Hero } from "../data/heroes.data"

const getHeroById = (id: number): Hero => {

  const hero = heroes.find(hero => hero.id === id);

  if (!hero) {
    throw new Error(`No existe un heroe con el id ${id}`);
  }

  return hero;
}

console.log(getHeroById(1));

const getHeroesByOwner = (owner: Owner): Hero[] =>
  heroes.filter(hero => hero.owner === owner);

console.log(getHeroesByOwner(Owner.DC));
console.log(getHeroesByOwner(Owner.Marvel));