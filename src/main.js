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
