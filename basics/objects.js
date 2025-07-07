//objects in js


mysymbol = Symbol("dr"); 
const js={
    name: "spideyrisab",
    "fname":"spidy",
    [mysymbol]:"drr",
    age: 22,
    location: "nepal",
    studying: "bachelors in computer engineering",

}
console.log(js.name)
console.log(js["fname"])// Accessing object properties using bracket notation

console.log(js[mysymbol]) 
js.name="suyog"
console.log(js);

//Object.freeze(js); // it freezes the object prevents any changes to the object
js.name="suyog2" // this will not change the name
console.log(js.name); // still prints "suyog" 

js.greetings=function(){
    console.log("hello users")
}
js.greetingss=function(){
    console.log(`hello users,${this.name}`)
}
console.log(js.greetings());
console.log(js.greetingss());

let date=new Date();
console.log(date.toLocaleTimeString()); // get the current year




 