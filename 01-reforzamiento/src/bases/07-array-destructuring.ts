const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [g1, v1, t1] = characterNames;
console.log({ p1: g1, p2: v1, p3: t1 });

// Getting only 2nd value
const [, v2] = characterNames;
console.log(v2);

// Getting only 3rd value
const [, , t2] = characterNames;
console.log(t2);

// final const indicates the datatype of each value
const getArray = () => ['ABC', 123] as const;

const [letters, numbers] = getArray();
console.log({ letters, numbers });

// Exercise

const useState = (value: string) => {
  return [value, (newValue: string) => { console.log(newValue) }] as const;
}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta')