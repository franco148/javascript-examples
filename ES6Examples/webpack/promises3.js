let turnOnComputer = function() {
    return new Promise((resolve, reject) => {
        reject('FIRST ONE FAILED');
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


turnOnComputer().then((result) => {
    return openBrowser(result);
}, (error) => {
    console.log(error);
}).then((result) => {
    console.log('SECOND ONE');
}, (error) => {
    console.log(error);
}).then((result) => {
    console.log('THIRD ONE');
}, (error) => {
    console.log(error);
});

