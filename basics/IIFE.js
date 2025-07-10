//Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.

function hungry(){
    console.log("give me something to eat")

}
hungry(); //normal function call

(function (){
    console.log("I am an IIFE function")
})(); //IIFE function call
(()=>{
    console.log("I am an IIFE arrow function")
})(); //IIFE arrow function call
