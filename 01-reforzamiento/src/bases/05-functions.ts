function greet(name: string): string {
  return `Hello ${name}`;
}

const message = greet('Goku');

console.log({ message });

const greet2 = (name: string): string => `Hello ${name}`;

const message2 = greet2('Vegeta');
console.log({ message2 });

interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: 'ABC-123',
    username: 'El_Papi23'
  }
}

const user = getUser();
console.log({ user });

const getUser2 = (): User => ({
  uid: 'ABC-123',
  username: 'El_Papi23'
});

const user2 = getUser2();
console.log({ user2 });

