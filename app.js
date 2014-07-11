var prompt = require('sync-prompt').prompt;

var f = [];

function factorial(n){
  if(n===0 || n===1){
    return 1;
  }
  if(f[n] > 0){
    return f[n];
  }
    return f[n] = factorial(n-1)*n;
}

var z;
z = factorial(5);
console.log(z);
z = factorial(4);
console.log(z);
z = factorial(3);
console.log(z);
z = factorial(2);
console.log(z);
z = factorial(1);
console.log(z);


