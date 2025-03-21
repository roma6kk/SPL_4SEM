async function executePromise() {
    const myPromise = new Promise((resolve, reject) => {
      resolve(21); 
    });
  
    const result1 = await myPromise;
    console.log(result1);
  
    const result2 = result1 * 2;
    console.log(result2); 
  }
  
  executePromise();