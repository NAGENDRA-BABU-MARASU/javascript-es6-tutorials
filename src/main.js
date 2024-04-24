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