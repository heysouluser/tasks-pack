// 1. задача - вернуть новый объект с необходимыми полями

// допустим есть объект basket с полями id, name, price, status
// const result = basket.map(item => ({ name: item.name, price: item.price }));

// 2. отсортировать массив по имени и возрасту

// const users = [
//   {
//     name: 'Ivan',
//     age: 30,
//   },
//   {
//     name: 'Valya',
//     age: 33,
//   },
//   {
//     name: 'Foma',
//     age: 22,
//   },
// ];

// let newUsers = users.sort((u1, u2) => u1.age - u2.age);
// let sortByName = users.sort((u1, u2) => {
//   return u1.name.localeCompare(u2.name);
// });

// console.log(newUsers);
// console.log(sortByName);

// 3. Из массива объектов (студентов) вернуть объект, где ключами будет возраст студентов, а значениями объекты (студенты). Если значений несколько, то они должны быть обернуты в массив

// const students = [
//   { name: 'Alex', age: 20 },
//   { name: 'Ivan', age: 23 },
//   { name: 'Petro', age: 20 },
//   { name: 'Ilya', age: 20 },
//   { name: 'Vasya', age: 26 },
// ];

// const groupByAge = (array) => {
//   return array.reduce((accum, student) => {
//     const { age } = student;
//     if (!accum[age]) {
//       accum[age] = student;
//     } else {
//       if (!Array.isArray(accum[age])) {
//         accum[age] = [accum[age], student];
//       } else {
//         accum[age].push(student);
//       }
//     }
//     return accum
//   }, {});
// };

// console.log(groupByAge(students));

// 4. Write a generator function that returns a generator object which yields the fibonacci sequence. The fibonacci sequence is defined by the relation Xn = Xn - 1 + Xn - 2. The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

// var fibGenerator = function* () {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// };

// let genFib = fibGenerator();
// console.log(genFib.next());
// console.log(genFib.next());
// console.log(genFib.next());
// console.log(genFib.next());
// console.log(genFib.next());
// console.log(genFib.next());

// 5. Once

// var once = function (fn) {
//   let flag = false;
//   return function (...args) {
//     if (!flag) {
//       flag = true;
//       return fn(...args);
//     } else {
//       return undefined;
//     }
//   }
// };

// 6. Есть массив const arr = [10, 5, 0, 10, 6, 6, 7, 2, 9, 9], нужно вернуть массив значений, которые не повторяются, т.е. [5,0,7,2]

// const arr = [10, 5, 0, 10, 6, 6, 7, 2, 9, 9];

// без сохранение порядка
// function onceValue(array) {
//   let sortObj = array.reduce((acc, val) => {
//     if (!acc[val]) {
//       acc[val] = 1;
//     } else {
//       acc[val]++;
//     }
//     return acc;
//   }, {});
//   let finArr = [];
//   Object.entries(sortObj).map(([key, val]) => {
//     if (val === 1) finArr.push(key)
//   });
//   return finArr;
// }

// c сохранением
// function onceValue2(array) {
//   return array.filter((val, i, arr) => {
//     return arr.indexOf(val) === arr.lastIndexOf(val);
//   })
// }


// console.log(onceValue(arr));
// console.log(onceValue2(arr));












