let myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(21), 1000); 
})
.then((res) => { console.log(res); return res *= 2 })

