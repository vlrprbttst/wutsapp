console.log("START");

var RndProvider = new Promise(function(resolve, reject) {
    var rnd = Math.floor(Math.random() * 5 + 1);
    //console.log(rnd);
    resolve(rnd);
});


var promiseRndEqualTo0 = new Promise(function(resolve, reject) {
    function getRnd() {
        var rnd = Math.floor(Math.random() * 5);
        console.log(rnd);
        if (rnd === 0) {
            resolve(rnd);
            return;
        }
        getRnd();
    }
    getRnd();
});

promiseRndEqualTo0.then(function(rnd) {
    console.log(rnd);
});
