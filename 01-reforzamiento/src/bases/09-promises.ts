const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
    // reject('Mi amigo se perdio!');
  }, 2000);
});

myPromise.then((money) => {
  console.log(money)
}).catch((e) => {
  console.warn(e);
}).finally(() => {
  console.log('Pues a seguir con mi vida');
});