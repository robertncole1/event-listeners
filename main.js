// console.log('Hello World');

function saysHello(user) {
  return `Hello ${user}!`; 
}

function saysGoodbye(user) {
  return `Goodbye ${user}!`; 
}

function create(user, cb) {
  return cb(user);
}

console.log(create('Rob', saysHello));
console.log(create('Rob', saysGoodbye));
