const myArray: number[] = [1, 2, 3, 4, 5, 6];

// myArray.push('10');

const myArray2 = [...myArray];

myArray.push(2);

console.log({ myArray, myArray2 });
