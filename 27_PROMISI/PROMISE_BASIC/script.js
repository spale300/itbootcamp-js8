let getSomething = () => {
  let obj = new Promise((resolve, reject) => {
    //resolve("Nesto resolve"); // Ako je sve proslo ok onda je resolve
    reject("Nesto reject"); // Ako nesto nije proslo dobro onda je reject
  });

  return obj;
};

getSomething()
  .then((a) => {
    console.log(`Aktivirana je .then grana ${a}`);
  })
  .catch((a) => {
    console.log(`Aktivirana je .catch grana ${a}`);
  });
