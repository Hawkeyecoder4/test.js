
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


/*****************************************************Convertion********************************************** */
/* in convertion result always show in boolian form  True or False */
// simple Convertion
console.log(2>3);
console.log(2<3);
console.log(2==3);
console.log(2>=3);
console.log(2<=3);

/* some different type of data conversions */
console.log("2">2);
console.log(2=="2");
console.log("2"==2);
console.log(2==="2");


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
                    console.log( name1.length); 
                    /* find length */
                    console.log(name1.toUpperCase)
                     /* to change uppercase and lowercase */
                    console.log(name1.charAt(4))
                     /*find position of character in string  */
                    console.log(name1.indexOf('b'))
                     /* find alphabet position  */
                    console.log(name1[4])
                     /* find character position */
                    console.log(name1.substring(0,4))
                     /* to find character length from to from */
                    console.log(name.slice(-1 , 4));
                     /*  slice use in negative or reverse*/
                    console.log(name.replace('U' , 'O'));
                     /* to Replace character */
                    console.log(name.trim("Umar"));
                     /* trim use to trim string Character search at GPT */
                    console.log(name.split("A"));
                     /* To change in String into Array*/

                      /* Further more check prototype to check all fuctions and method about string */