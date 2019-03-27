let turnOnComputer = function() {
    return new Promise((resolve, reject) => {
        resolve('FIRST ONE FAILED');
    });
};

let openBrowser = function(msg) {
    return new Promise((resolve, reject) => {
        resolve(msg + ' Browser is open');
    });
};

let goToThisPage = function(msg) {
    return new Promise((resolve, reject) => {
        resolve(msg + ' Go to eextreme.com');
    });
};


Promise.all([turnOnComputer(), openBrowser(), goToThisPage()]).then(() => {
    console.log('DONEEE');
}).catch(() => {
    console.log('FAILED');
});