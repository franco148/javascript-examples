let myPromise = new Promise(function(resolve, reject){
    let isComplete = true;

    if (isComplete) {
        resolve("This is complete");
    } else {
        reject("This is not complete");
    }
});

myPromise.then((result) => {
    console.log(result);
}, (error)=>{
    console.log(error);
});