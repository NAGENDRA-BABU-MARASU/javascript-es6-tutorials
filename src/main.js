/* ====================== let ===========================
// var a = "test1";
// let b = "test2";

function testVar(){
  var a = 30;
  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

// testVar()

function testLet(){
  let a = 30;
  if(true){
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

// testLet()

for(let i = 0 ; i < 10; i++){
  console.log(i);
}
console.log(i); // will not work with let , but works with var
*/

/* ======================= const ================================
const colors = []
colors.push('red')   // works 
colors.push('blue')  // works
console.log(colors)

colors = 'green'; // error 
*/

/* ========================= classes & inheritance ==============
class User{
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static countUsers(){
    console.log('there are 50 users')
  }

  register(){
    console.log(this.username + " is now registered");
  }
}

// let bob = new User("bob", "bob@mail.com", "bob123")
// bob.register();
// User.countUsers();

class Member extends User{
  constructor(username, email, password, memberPackage){
    super(username, email, password)
    this.package = memberPackage;
  }

  getPackage(){
    console.log(this.username + " is subscribed to the " + this.package + " package")
  }
}

let mike = new Member("mike", "mike@mail.com", "123", "standard")
mike.getPackage();
mike.register();
*/ 

/* ===================== template literals ==============================
const user = "Nagendra"

let greeting = `Hello, ${user}, good morning!`

console.log(greeting)
*/

/* ================== String and Number methods =======================  
let theString = 'Hello, my name is Nagendra and I love JS'

// startsWith()
// endsWith()
// includes()

// console.log(theString.startsWith('Hello'))
// console.log(theString.endsWith('JS!'))
// console.log(theString.includes('love'))

// Hex
// console.log(0xFF)

// // Binary
// console.log(0b1011)

// // Octal
// console.log(0o543)

// console.log(Number.isFinite(NaN))
// console.log(Number.isNaN(1))
// console.log(Number.isInteger(123))
*/

/* default params & spread operator

// function greet(greeting = 'Hello World'){
//   console.log(greeting)
// }

// greet()

// let args = [1,2,3]
// let args2 = [4,5,6]

// function test(){
//   console.log(args+ "," + args2)
// }

// test(...args , ...args2)

// test.apply(null, args)

*/

/* set,map, weakset, weakmap
// let myArray = [11,2,43,65,43];
// let mySet = new Set(myArray);

// mySet.add('102');
// mySet.add('102');
// mySet.add({ a: 1, b: 2 })
// mySet.add({ a: 1, b: 2 }) // this is also will be added because those two objects aren't same !
// mySet.delete(43)

// // mySet.clear()

// // console.log(mySet)
// // console.log(mySet.size)

// mySet.forEach(function(val) {
//   console.log(val)
// })

// // key value pairs map 
// let myMap = new Map([['a1','Hello'], ['b2', 'Goodbye']])
// myMap.set('c3', 'World')
// myMap.delete('a1')
// console.log(myMap)

// let carWeakSet = new WeakSet();

// let car1 = {
//   make: 'Honda', 
//   model: 'Civic'
// }

// let car2 = {
//   make: 'Toyota',
//   model: 'Camry'
// }

// carWeakSet.add(car1)
// carWeakSet.add(car2)

// console.log(carWeakSet)

let carWeakMap = new WeakMap();

let key1 = { 
  id : 1
}

let car1 = {
  make: 'Honda',
  model: 'Civic'
}

carWeakMap.set(key1, car1)

console.log(carWeakMap)
*/


/* arrow functions
// function Prefixer(prefix){
//   this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function(arr) { 
//   return arr.map(x =>{
//     console.log(this.prefix + x)
//   })
// }

// let prefixer = new Prefixer('Bye ')
// prefixer.prefixArray(['Luffy', 'Ace'])

// let add = function(a,b){
//   let sum = a+b;
//   console.log(sum);
//   return false;
// }

// let add = (a,b) => {
//   console.log(a+b)
//   return false
// };

// add(1,2)
*/

/* promises
// var myPromise = Promise.resolve('Foo')

// myPromise.then((response) => console.log(response) )

// var myPromise = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     resolve(4)
//   }, 2000)
// })

// myPromise.then(res => {
//   res = res + 3;
//   console.log(res);
// })

// function getData(method, url){
//   return new Promise(function(resolve, reject){
//     var xhr = new XMLHttpRequest()
//     xhr.open(method, url);
//     xhr.onload = function(){
//       if(this.status >= 200 && this.status < 300) {
//         resolve(xhr.response)
//       } else {
//         reject({
//           status: this.status , 
//           statusText: xhr.statusText
//         })
//       };
//     };
//     xhr.onerror = function(){
//       reject({
//         status: this.status,
//         statusText: xhr.statusText
//       })
//     };
//     xhr.send()
//   });
// }

// getData('GET', 'https://jsonplaceholder.typicode.com/todos').then(function(response) {
//   console.log(response)
// }).catch(function(err){
//   console.log(err)
// })
*/