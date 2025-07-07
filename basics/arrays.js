const myarr= [1, 2, 3, 4, 5];
console.log(myarr[0]);
const marr2= new Array(1,4,5);
console.log(marr2[1]);

myarr.push(7);
console.log(myarr);

myarr.unshift(9);
console.log(myarr);
myarr.join();// Convert array to string

const ar =marr2.slice(0, 2);
console.log(ar);
console.log(marr2);

const ar1 =marr2.splice(0, 2);
console.log(ar1);
console.log(marr2);