// function greet(user: { name: String; age: number }) {
//   console.log(`hi ${user.name}`);
// } not an interface

interface Usertype {
  name: String;
  age: number;
}

function greet(user: Usertype) {
  console.log(`hello!${user.name}`);
}

let useer: Usertype = {
  name: "gautam",
  age: 21,
};
greet(useer);
