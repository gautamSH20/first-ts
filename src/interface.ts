// function greet(user: { name: String; age: number }) {
//   console.log(`hi ${user.name}`);
// } not an interface

// interface Usertype {
//   name: String;
//   age: number;
// }

// function greet(user: Usertype) {
//   console.log(`hello!${user.name}`);
// }

// let useer: Usertype = {
//   name: "gautam",
//   age: 21,
// };

// interface Address {
//   city: String;
//   country: String;
//   pincode: number;
// }

// interface User {
//   name: String;
//   age: number;
//   address?: Address; //to make its optional we put ? before colons(:)
// }

// let user2: User = {
//   name: "Gautam",
//   age: 21,
// };

// let user: User = {
//   name: "gautam",
//   age: 21,
//   address: {
//     city: "hamirpur",
//     country: "India",
//     pincode: 177001,
//   },
// };

// function isleagel(user: User): boolean {
//   return user.age >= 18;
// }

//  Real thing starting from here

interface Preson {
  name: string;
  age: number;
  greet(): boolean;
}

class Manager implements Preson {
  constructor(public name: string, public age: number) {}

  greet() {
    return this.age >= 18;
  }
}

let pres = new Manager("gautam", 21);

// TYPES

// Intersection
type Employee = {
  name: string;
  startDate: string;
};

type Managers = {
  name: string;
  department: string;
};

type TeamLead = Employee & Managers;

let e: Employee = {
  name: "gautam",
  startDate: "01-01-2003",
};

let m: Managers = {
  name: "gautam",
  department: "Software",
};

let t: TeamLead = {
  name: "gautam",
  startDate: "01-01-2003",
  department: "Software",
};

// UNION
type StringOrNumber = string | number;

function print(pn: StringOrNumber) {
  console.log(pn);
}

type GoodUser = {
  name: string;
  gift: string;
};

type BadUser = {
  name: string;
  ip: string;
};

let u1: GoodUser = {
  name: "Guatam",
  gift: "nice",
};

let u2: BadUser = {
  name: "Gautam12",
  ip: "Bad",
};

function greet(a: GoodUser | BadUser) {
  console.log(`hello ${a.name} and ${a}`);
}

// Arrays
let arr: number[] = [1, -2, -3];

let max: number = 0;

function maxNum(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxNum(arr));

interface User1 {
  firstName: string;
  lastName: string;
  age: number;
}

function filerUer(user: User1[]) {
  return user.filter((x) => x.age >= 18);
}

console.log(
  filerUer([
    {
      firstName: "gautam",
      lastName: "sharma",
      age: 17,
    },
  ])
);
