// this is a js comment 
var temp  ;
temp = 10;
var temp2 ;
temp2 = temp ;
console.log(temp2) ;
let str = "my string" ;
// uninitialize variable 
var c ;
c = c + " String!";
console.log(c)

// Understanding Case Sensitivity in Variables 

// myvar and MyVar both are different
// let a = 20 ;
// {
//     let a= 10 ;
//     console.log(a) ;
//     // o/p = 10
// }
// console.log(a);
// // o/p = 20 

// {
//     console.log(temp) ;
//     // o/p = 10

// }
const name = 'MAD';
// its value can't be changed
var a = 10 ;
var b = 20 ;
console.log(a +b); 
console.log(b-a) ;
console.log(b*a) ;
console.log(b/a) ;
++a ;
console.log(a) ;
--a ;
console.log(a);
var d = 12.5 ;
console.log(d);
var e = 2.334 ;
console.log(d*e);
console.log(d/e);
console.log(d%e);
a += 1  ;
console.log(a);
a -= 3 ;
console.log(a);
a *= 2 ;
console.log(a);
a /= 3 ;
console.log(a);
var lit = "my name is \'madhur jaiswal\'" ;
console.log(lit);
var lit = 'Quoting Strings with Single Quotes' ;
console.log(lit);
var escap= "input\n putput" ;
console.log(escap);
var concat = 'hello ' + 'everyone' ;
console.log(concat);
var mad = "hello " ;
mad += "everyone" ;
console.log(mad)

var mix = "madhur " + mad + " bye" ;
console.log(mix);

var append_var = `Good morning ${mad}`  ;
console.log(append_var)
console.log(append_var.length) ;

console.log(append_var[0]);
var mystr = "job" ;
mystr[0] = "d"
console.log(mystr);  //o/p = job
console.log(mystr[1]);  //o/p = job
console.log(mystr[mystr.length-1]) ;
console.log(mystr[mystr.length-2]) ;
var blank = "it was hot " + " we laugh" ;
console.log(blank); 

var arr = [4,5,6 ,"hello", true , undefined];
var arr = [4,5,6 ,"hello", true , undefined ,["my", 'name', 3]];
console.log(arr) ;
console.log(arr[2]) ;
arr[3] = "everyone" ;
console.log(arr[6][1]) ;

arr.push("madhur");
console.log(arr) ;

arr.pop();
console.log(arr) ;

arr.shift();
console.log(arr) ;

arr.unshift("mad");
console.log(arr) ;

var shopping = ["candies",25];

function myfunc(para){
    console.log("hello sir !!" + para);
}
myfunc("good morning") ;

function add(a,b){
    let c = a+b ;
    return c 
}
console.log(add(4,5));


var sum = 10 ;
function sub(){
    console.log(sum) ;
}
sub()

function local(){
    let local_var = 12.575 ;
    console.log(local_var);
}
// console.log(local_var); //it throw error because it is a local variable
local() ;

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
console.log(myFun());

function undefine(){
    sum = 5 + 4 ;
}
console.log(undefine()) ; //it return undefined

 function assign(){
     sum = 12 + 12.54 ;
     return sum ;
 }
 new_var = assign()
 console.log(new_var);

 function arr2(arr1, append){
     arr1.push(append);
     arr1.shift();
     return arr1 ;
 }
 console.log(arr2([1,2,3,4,5],7));

 function welcomeToBooleans() {
  
    return true; 
  
  }
  let age = 19 ;
  if(age > 18){
      document.write("you are adult");
  }
  else{
      document.write("not adult!!");
  }
  my_val = "2";
  if(my_val == 2){
      console.log(true);
  }
  if(my_val === 2){
      console.log(true);
  }
  else{
      console.log(false) ;
  }

  if(8 === "8"){
      console.log(false);
  }
  else{
      console.log(true);
  }

  function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

  function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

  function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

  function testGreaterThan_equal(val) {
    if (val >= 100) {  // Change this line
      return "Over 100";
    }
  
    if (val >= 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan_equal(10);

  function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

  function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

function testLogicalAnd(val){
    if(val < 50 && val > 25){
        console.log("value is between 25 and 50");
    }
}
testLogicalAnd(28);
function testLogicalor(val){
    if(val < 50 || val > 25){
        console.log("value is between 25 and 50");
    }
    else if(val == 50 || val ==25){
        console.log("value is equal to 50 or 25");
    }
    else{
        console.log("less than 25 ");
    }
}
testLogicalor(25);

function orderMyLogic(val) {
    if (val < 10  && val >5) {
      return "Less than 10";
    } else if (val < 5) {
      return "Less than 5";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(4);
let val = 14 ;
if(val < 30 && val > 15){
    console.log("value is less than 30");
}
else if(val <15){
    console.log("value is less than 15")
}


function golfScore(par, strokes) {
    // Only change code below this line
     if(strokes == 1){
       return "Hole-in-one!"
     }
     else if(strokes <= par-2){
       return "Eagle";
     }
     else if (strokes == par-1){
       return "Birdie"
     }
  
    return "Change Me";
    // Only change code above this line
  }
  
  golfScore(5, 4);

lowercaseLetter = "b" ;
  switch(lowercaseLetter) {
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
    case "c":
      console.log("C");
      break;
    default:
        console.log("not a lower");
        break ;
  }