console.log(null > 0);// here js converts null to 0 and then compares them
console.log(null == 0);//comparison operator and equality operator work differently in js 
console.log(null >= 0);

console.log("2" > 1);// here js converts string to number and then compares them
console.log("02" == 2);// here js converts string to number and then compares them

console.log(undefined == 0);//undefined is not equal to 0
console.log(undefined > 0);
console.log(undefined < 0);


//the above comparison creates confusion in js so we avoid it
