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