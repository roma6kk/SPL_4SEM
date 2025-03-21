function createPromise(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        resolve(randomNumber);
      }, delay);
    });
  }
  
  const promises = [
    createPromise(3000),
    createPromise(3000),
    createPromise(3000)
  ];
  
  Promise.all(promises)
    .then((results) => {
      console.log(results);
    })
    ;