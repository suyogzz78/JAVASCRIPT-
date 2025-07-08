//scope are the accessibility of variables, functions, and objects in some particular part of your code during runtime.
//scope in js are global, function, block
// global scope
if (true){
    let x=10;
    const y= 20;
    var z = 30; // var is function scoped, not block scoped
}


//console.log(x); // Output: ReferenceError: x is not defined
//console.log(y); // Output: ReferenceError: y is not defined
console.log(z); // Output: 30, because z is function scoped and accessible here

function one()
{
    const name="suyog"
    function two()
    {
        const surname="gautam"
        console.log(name); // Output: suyog

    }
   // console.log(surname); // Output: ReferenceError: surname is not defined
    two()
}
one();

if (true){
    const username="suyog"
    if(username === true)
    {
        const website ="https://suyog.com"
        console.log(username)
    }
   // console.log(website) // Output: ReferenceError: website is not defined
}
//console.log(username) // Output: ReferenceError: username is not defined

