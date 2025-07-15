const myarr= [1, 2, 3, 4, 5];
console.log(myarr[0]);
const marr2= new Array(1,4,5);
console.log(marr2[1]);

myarr.push(7);
console.log(myarr);

myarr.unshift(9);
console.log(myarr);
myarr.join();// Convert array to string

const ar = marr2.slice(0, 2);//slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
console.log(ar);
console.log(marr2);

const ar1 = marr2.splice(0, 2);//splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements.
console.log(ar1);
console.log(marr2);


 