//datatypes in js
// in js we dont have to declare the datatype of the variable, it is automatically assigned by js engine

let name="spidy"//string
let age= 22//number
let isStudent= true//boolean
let studentid= null//null
let studentemail= undefined//undefined
/*difference in null and undefined is that null is a value assigned to a variable, while undefined is a variable that has been declared but not assigned any value*/
let studentroll= Symbol("22")//symbol
let studentaddress= BigInt(12345678901234567890)//bigint

console.log(typeof name, typeof age, typeof isStudent, typeof studentid, typeof studentemail, typeof studentroll, typeof studentaddress);
// in js we have 7 datatypes, 6 are primitive and 1 is non-primitive




