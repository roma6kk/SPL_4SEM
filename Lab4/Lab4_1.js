const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      resolve(randomNumber);
    }, 3000);
  });
  
  myPromise.then((result) => {
    console.log("Сгенерированное число:", result);
  });