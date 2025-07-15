  const studentid= "224";//constants are immutable
  let studentname= "suman"//variables are mutable
  let studentemail= "sutman@gmail.com"
  studentroll= "21"//not declared with let or const, so it is mutable


  studentemail= "spidy@gmail.com"
  studentroll= "22"
  console.log(studentid, studentemail, studentroll); 

  /* we dont use var in the js because it has issue in block scope*/

  //palindrome in js
  const str = "madam";
  const isPalindrome = (str) => {
    const reversestr= str.split("").reverse().join("");//here we are splitting the string into an array, reversing it, and then joining it back to a string
    return reversestr === str;
  }
  console.log(isPalindrome(str)); // true