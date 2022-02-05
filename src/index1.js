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

