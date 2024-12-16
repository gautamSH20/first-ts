// Pick
interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

type userDisplay = Pick<User, "name" | "email" | "age">;
type UpdatePartial = Partial<userDisplay>; //PRRTIAL

function displa(user: UpdatePartial) {
  console.log(`${user.name} ${user.age} ${user.email}`);
}

let u1: User = {
  name: "gautam",
  age: 21,
  password: "1234",
  email: "1234",
};

// READONLY

type User2 = {
  name: string;
  age: number;
};
const us: Readonly<User2> = {
  name: "abc",
  age: 21,
};

// EXCLUDE
type EventS = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<EventS, "scroll">; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click"); // OK
