interface Address {
  zipcode: string;
  city: string;
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    zipcode: 'ABC123',
    city: 'New York'
  }
}

// const spiderman = ironman; This is wrong
// const spiderman = { ...ironman }; This apply only for first properties eg. address is the same for both
const spiderman = structuredClone(ironman); // Creates a deep clone

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.address.city = 'San Jose';

console.log(ironman, spiderman);
