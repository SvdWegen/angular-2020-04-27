// ECMAScript 5: Internet Explorer 9+
let getal: number = 25;
getal = 'qqq';

let func = function() {
    console.log('function');
    console.log(this);
};

console.log(this);
let lambda = () => {
    console.log('lambda', this);
};

//class Hoi {

//}

//class Ding extends Hoi implements Doei {
//    constructor() {
//        super();
//        console.log('dingggg');
//    }

//    getBla() {
//        console.log('getBla');
//    }

//    aha() {

//    }
//}

//interface Doei {
//    aha();
//}

async function asynchronous() {

}