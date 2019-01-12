function es6_VAR() {
  var a = 10;
  console.log("ES6_VAR1", a); // output 10
  if (true) {
    var a = 20;
    console.log("ES6_VAR2", a); // output 20
  }
  console.log("ES6_VAR3", a); // output 20
}

function es6_LET() {
  let a = 10;
  console.log("es6_LET1", a); // output 10
  if (true) {
    let a = 20;
    console.log("es6_LET2", a); // output 20
  }
  console.log("es6_LET3", a); // output 10
}

function es6_LET_Error() {
  let a = 10;
  let a = 20; //throws syntax error
  console.log("es6_LET_Error", a);
}

function es6_CONST() {
  const MY_VARIABLE = 10;
  console.log("es6_CONST", MY_VARIABLE); //output 10
}

function es6_CONST_Error() {
  const MY_VARIABLE = 10;
  console.log("es6_CONST_Error1", MY_VARIABLE); //output 10
  MY_VARIABLE = 20; //throws type error
  console.log("es6_CONST_Error2", MY_VARIABLE);
}
