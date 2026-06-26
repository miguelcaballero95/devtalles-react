const person = {
  name: 'Tony',
  age: 45,
  key: 'ironman'
}

const { name, age, key } = person;

console.log({ name, age, key });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({ key, name, age, rank }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age
    },
    rank
  }
}

// Destructuring a nested object and renaming variable to avoid errors
const { rank, keyName, user: { name: contextName } } = useContext(person);

console.log({ rank, keyName, contextName })