
setTimeout(calculator,5);

function result(res) {

    console.log('The sum is = ' + res);
}

function calculator(a, b ,myCallback) {
    var add = a+b;
  console.log(`First and Second number are = ${a} & ${b} `);
  myCallback(add);

}

let a=5,b=2;

calculator(a,b,result);
