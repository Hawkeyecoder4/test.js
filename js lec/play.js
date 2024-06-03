
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

let logged = 1;
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

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
// (power off )
console.log(2 / 2);
console.log(2 % 5);
// (first is under squre and second is off squre )

// opreators on different data types 
console.log("1" + 2)
console.log(1 + "2");
console.log(1 + 2 + "3");
console.log("1" + 2 + 3);

// if string first all values add like string 
// if number first than first number add and than opreate string


/*****************************************************Convertion********************************************** */
/* in convertion result always show in boolian form  True or False */
// simple Convertion
console.log(2 > 3);
console.log(2 < 3);
console.log(2 == 3);
console.log(2 >= 3);
console.log(2 <= 3);

/* some different type of data conversions */
console.log("2" > 2);
console.log(2 == "2");
console.log("2" == 2);
console.log(2 === "2");


/* different type of data convertion effect on result that doesnt give the predictable value
Strictly prohabted to use different type of data for same convertion*/

/*  "==" is used for equal but not strictly check data type otherwise "===" is also use for convertion but strictly check 
data type if data is not same the result of "===" is false */


/* There are two major types of data type
 1)  Primitive 
 2)  Non Primitive
 
 Primitive data types are almost 7 further types
 1)  string       let name = "Umar";
 2)  Number       let age  =  24;
 3)  Boolean    let logged =  True;
 4)  Bigint       let num  =  123456789023345n
 5)  null         let tem  =  Null
 6)  undefined     let age;
 7)  symbol        use further next topics

 non Premitive data types are almost 3 fruther types
 1)  Array           let Airmens = ["umar","hamza","Tanveer","Fasil","Saif"]
 2)  Object           let student = {
                                name = "Umar";
                                age  = 24;
                            islogged = True
                             }
 3)  Functions              Function(){}     =>  let addition = function(){
                                                   console.log(2+3);
                                                   }

/*************************************************Memory Type*************************************************/
/* There are two types of memory in js "stack" and "Heap"
stack Memory : 
              primitive data stored in stack memory
Heap Memory  : 
              Non Primitive data stored in heap memory

             String and its methods 
             let name =  "UmarAbbasJutt"  
             => 'UmarAbbasJutt'  => Same in double and single qouts...
                   */
let name1 = "UmarAbbas";
console.log(name1.length);
/* find length */
console.log(name1.toUpperCase)
/* to change uppercase and lowercase */
console.log(name1.charAt(4))
/*find position of character in string  */
console.log(name1.indexOf('b'))
/* find alphabet position  */
console.log(name1[4])
/* find character position */
console.log(name1.substring(0, 4))
/* to find character length from to from */
console.log(name.slice(-1, 4));
/*  slice use in negative or reverse*/
console.log(name.replace('U', 'O'));
/* to Replace character */
console.log(name.trim("Umar"));
/* trim use to trim string Character search at GPT */
console.log(name.split("A"));
/* To change in String into Array*/

/* Further more check prototype to check all fuctions and method about string */


/*************************Nums & Maths***********************
 * 
 * 
 * in numbers we learn about number and its properties apply on it
 * e.g
*/
const figr = 1234000.34;

console.log(figr);

const hundred = new Number(100);
console.log(hundred);

/* in first number java auto detect 600 is a number but in 2nd we define a number. Both results are different
we also use Prototype to find all properties of numbers */
console.log(figr.toString())

console.log(figr.toFixed(2))

console.log(figr.toPrecision(3))

console.log(figr.toLocaleString())


console.log(figr.MIN_VALUE)



/* Math formulas in js is not very important in programming but some of math function is very important lets see*/

console.log(Math.random());
console.log(Math.random() + 1);
console.log(Math.random() * 10 + 1);
console.log(Math.random() * 10 + 1);

console.log(Math.floor(Math.random() + 1));

const min = 20;
const max = 40;
console.log(Math.floor(Math.random() * (max - min + 5) + 1));

/* in this math function first we log  math.random thats value between 0 and 1 
second we add 1 that value should be in greater than 1
third we multiply with 10 and add 1 that ramdom no generate between 1 to 10.
we use math.floor for the 1 value in result not show in decimal form
at the end math.random with other properties for check its working*/



/*************************************************Date & Time*********************************************/
let umar = new Date();
console.log(umar);
console.log(umar.toDateString());
console.log(umar.toString());
console.log(umar.toLocaleString());
console.log(umar.toLocaleDateString());
/*These all method show the time setting in own style
and next we find now date*/
let umara = Date.now();
console.log(umara);
/* When we use Date.now console show value in miliseconds we can divide to 1000 to get date in seconds but its not much
prefer to use in code */

umar.toLocaleString('default' , {
      weekday: "narrow",
})

let time = new Date();
console.log(time.getMinutes());
console.log(time.getMonth());
console.log(time.getFullYear());
console.log(time.getTimezoneOffset());
/* This method is best for further information to get from date variabel */

/*****************************************************Array*****************************************************/

 /* Array is a "object" that can be "resizeable" and "0 indux" mean element no. start from 0  
 some important methods of array
 .push()     to add element in last of array ...(when we push another array in first array this array add as element and add as array in array)
 .pop()      to remove element in last of array
 .unshift()  to add element in start of array
 .shift()    to remove element in start of array
 .include()  result always in true and false to show that brakets elements present in array
 .indexOf()  to wright no in index brakets and find element on index
 .join()     to change data formate in string also we can say change typeof data 
 .slice()    to show element (1 , 5) 1 to 4 in array last digit not include in all
 .splice()   Donot show these element   (1 , 2 ,3)  in orignal array except these other element show
 .concat()   Merage two arrays and create new array we use with let a = b.concat(c);  a is new array
 spread opreator   e.g..    a = [...b , ...c]    a  b  c    is array names
 .flat()     To remove arrays in array and result single array e.g.. a = [1,2,[3,4,[5,6,7],8],9,[10,11T,12]];
 array.from()  to convert in array e.g.  a = "umar" => console.log(array.from(a));
 array.of()  convert num data in array
 many other properties of array availible in prototype 
       */

 /********************************************************Object************************************************ */

 /* object always in vurly brackets */
const mysym = Symbol("key1")

 let userId = {
      name : "Umar Abbas",
      age : 24,
      location : "Pakistan",
      [mysym]: "mykey1",
      Email : "juttbrand454@gmail.com",
      isloggedIn : true ,
      lastloginDays:["monday","saturday"]

 }
 console.log(userId.age);
 console.log(userId["Email"]);
 userId.Email = "umarabbasjuttak47@gmail.com";
 console.log(userId["Email"]);
//  console.log(userId["symbl"]);
//  console.log(typeof userId["symbl"]);

 console.log(userId[mysym]);
 console.log(typeof userId[mysym]);
 console.log(userId);
//  Object.freeze(userId);
 userId.age = 23 ;
 
 userId.greeting = function(){
      console.log("Good Night brother");
 }

 userId.greetingTwo= function(){
      console.log(`Good Night Brother ${this.name}`);
 }
 console.log(userId.greeting());
 console.log(userId.greetingTwo());

 /* We can access element and change elements data through (.)
  * and access with (.) and [""]
  * We can freeze object with  object.freez(object name) after freeze no change occur in object
  * when we use symbol first we define symbol with let or const then enter in object with [] : symbol value then they show symbol 
  otherwise they show typeof as string
  * we use other functions with object like above e.g.
  * we use other function in funtion we can object elements through this.etc in  $() use with bars `` */

  const day1 = new Object ();
  day1.name = "Umar Abbas Jutt";
  day1.age = 24;
  day1.Email = "juttbrand@gmail.com" ;
  console.log(day1);
/* we can define object like this and add value like above e.g. */
  let day2 ={
      name : "brothers" ,
      age : 24 ,
   eduFact : {
      primary : "mbd" ,
      secondry : "jhlm" ,
      schools : {
            foji : "1 year",
            govt : "5 year"
            
      }
   }
   };
   console.log(day2);
   console.log(day2.eduFact);
   console.log(day2.eduFact.schools);
   console.log(day2.eduFact.schools.govt);
/* we can get element value through (.) even many objects in object we simply access through (.) like above e.g. */

let day3 = {
      a : 1,
      b : 2,
}
let day4 ={
      c : 3 ,
      d : 4 
}

// let day5 = Object.assign({}, day3 , day4);
// console.log(day5);
let day5 = {...day3,...day4};
console.log(day5);

/* We can merage object through Object.assign(a,b,c) like above e.g. we add {} in first thats not compalsry but good for
  and we use spread oprator for same purpose like above e.g. result same but use 1 method at a time not both for 1 purpose*/
   let obj = [
      {
            name : "hasnain" ,
            age : 22
      },
      {
            name : "Amir" ,
            age : 23
      },
      {
            color : "Siraj" ,
            age : 23
      },
      {
            name : "Khurram" ,
            age : 23
      }
   ]
   console.log(obj[0]);
   
 /* This above method is called ("array of object") and we can access object like arrays method e.g. above*/
 console.log(userId);
console.log(Object.keys(userId));
console.log(Object.values(userId));
console.log(Object.entries(userId));
console.log(userId.hasOwnProperty("lastloginDays"));


/* we learn above 4 properties of objects 
>  .keys() is used for object keys shows in array  (name : "umar" ) name is key and "umar" is value.
>  .value() is used for object values shows in array
>  .entries() is used for show keys and values in every single array
>  .hasOwnProperty() is used for to check this key or value avalible in object result always shows in true or false
 for further more methods visit  prototype */

