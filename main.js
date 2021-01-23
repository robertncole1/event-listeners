// console.log('Hello World');

const firstObject = {

};

const user = {
  username: 'biz.markie',
  password: 'abc123',
  lovesJavascript: true,
  favoriteNumber: 42,
};

// DOT NOTATION

// console.log(user.lovesJavascript);
// console.log(user.username);
// console.log(user.favoriteNumber);

// BRACKET NOTATION
// const password = 'password'
// console.log(user[password]);
// console.log(user['username']);
// console.log(user['favoriteNumber']);


// ASSIGNING VALUES

const newUser = {
  isNew: true,
};

// newUser.username = 'fresh.prince';
// newUser ['password'] = 'abcd1234';
// console.log(newUser);

const newObject = {
  username: 'Robert',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
  }
}

// newObject.username = 'Aja';
// newObject.sayHello();

// ITERATE OVER AN OBJECT
const userTwo = {
  username: 'Trinity.christiana',
  password: 'xyz0987',
  lovesJavascript: true,
  favoriteNumber: 12,
}

for (let key in userTwo) {
  // console.log(key);
  console.log(userTwo[key]);
}
