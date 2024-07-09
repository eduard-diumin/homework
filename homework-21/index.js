"use strict";
function* Foo() {
  console.log("start");
  yield 1;
  yield 2;
  yield 3;
  console.log("finish");
}

const iterator = Foo();
iterator.next().value; // 1
iterator.next().done; // false

// ******

function Boo() {
  let state = 0;
  return {
    next: function () {
      switch (state) {
        case 0:
          console.log("start");
          state++;
          return { value: 1, done: false };
        case 1:
          state++;
          return { value: 2, done: false };
        case 2:
          state++;
          return { value: 3, done: false };
        case 3:
          console.log("finish");
          state++;
          return { value: undefined, done: true };
        default:
          return { value: undefined, done: true };
      }
    },
  };
}

const iteratorBoo = Boo();
console.log(iteratorBoo.next().value);
console.log(iteratorBoo.next().done);
