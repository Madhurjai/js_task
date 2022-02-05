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
let a = 20 ;
{
    let a= 10 ;
    console.log(a) ;
    // o/p = 10
}
console.log(a);
// o/p = 20 

{
    console.log(temp) ;
    // o/p = 10

}
const name ;
// its value can't be changed