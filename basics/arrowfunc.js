const user={
    name : "John",
    age : 30,
    greet: function() {
    
        console.log(`the name is ${this.name} and age is ${this.age}`);
    }
}
/* user.greet();
user.age=21;//changing the context
user.greet(); */
const chicken = function(){
    let price = 100;
    console.log(this.price)
}
chicken();//undefined because this is not defined in the function

const chickens = () =>{
    let price = 200;
    console.log(this.price)//undefined because arrow function does not have its own this context
}
chicken()

const mul=(a,b) => {
    return a*b;
}
const div =
    ( x,  y)=>{  
        return x%y;   
     }
const add = (a,b) => (a+b); //single line arrow function