function addnumber(n1,n2){
    return n1+n2;
}
//console.log(addnumber(5,10));
//const result = addnumber(5,10);
const result = addnumber(5,"a");
console.log(result); // Output: 15


function password(pass){
    if (pass == undefined || pass == null || pass == "") {
        return "Please enter a valid password";
    }
    return `Your password is ${pass}`;
}
console.log(password("1234"));
console.log(password("")); // Output: Please enter a valid password 



function calculatestockprice(val1,val2,...number){//here ...number is a rest parameter that collects all arguments into an array4
        // here va1l1 and val2 are regular parameters used to collect the first two arguments.
    return number;

}

console.log(calculatestockprice(100,299,899)); // Output: 899 because val1 takes 100, val2 takes 299 and number takes the rest of the arguments as an array

 const product={
    name:"charger",
    price: 1000,
 }

function ecommerce(anyproduct){
     return (`The name of the product is ${anyproduct.name} and the price is ${anyproduct.price}`);
}

console.log(ecommerce(product)); // Output: The name of the product is charger and the price is 1000