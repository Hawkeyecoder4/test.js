
//                                          "DATA TYPES"

// const numDate = '1,2,3,4,5';
// console.log(numDate);

// // in const data type we can not change the value of const varable data type //

// let num = '5,6,7,8,9,10';
// console.log(num);

// // in this data type we can change the value of let varibles data type

// var Data = '1,2,3,4,5,6';

// console.log(Data);
// // var is also the part of variable data type but its not recommanded because of var is sometime not working properly with scope{}

// let name = "UMAR" 
//     // data type is string
// let age = 15        
// //   data type is numeric
// let Isloggedin = true  
// // data type is boolian

// /*
// number    => we can use number 2 power 53.
// bigint    => use when number increase than 2 power of 53.
// string    => data type in "".
// boolian   => two value return (True \ False).
// null      => standalone set.(value assign empty) 
// undefined => value not assign.
// symbol    => use for to show something unique.



// object    => 
                                                // Convertion of Data

let score = "33";
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// // result of conversion in number result
// // "33"       =>   33
// // "33abc"    =>   NaN
// // True  => 1   False  => 0

let logged = 1 ;
let boolianlogged = Boolean(logged);
console.log(boolianlogged);

// result of conversion in Boolian result
//  1       =>   Ture
// ""    =>   False
// "Umar"  => True  

let data = 33;

let Data = String(data);
console.log(Data);
console.log(typeof Data);

// result of conversion in String result

// 33  => 33 in string datatype


/*********************************************OPREATERS*********************************************/

let name = "Umar";
let fName = "Abbas"
let fullName = name + fName;
console.log(fullName);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
// (power off )
console.log(2/2);
console.log(2%5);   
// (first is under squre and second is off squre )

// opreators on different data types 
console.log("1" + 2)
console.log(1+"2");
console.log(1+2+"3");
console.log("1"+2+3);

// if string first all values add like string 
// if number first than first number add and than opreate string

