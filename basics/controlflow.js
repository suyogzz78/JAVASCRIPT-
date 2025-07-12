  if (2=="2"){
    console.log("executes");
  }
    if (2==="2"){
    console.log("executes");// This will not execute because the types are different
  }
  const marks= 55;
  if(marks > 40)
  { 
    const grade ="A";
    console.log(`congrats! you have got ${grade}`);
  }
  const age = 20;
  if(age > 18) console.log("you can vote");//implicit return

  const bikeprice = 100000;
  if(bikeprice> 100000){
    console.log("you can buy the bike");
  }
  else if(bikeprice <= 100000){
    console.log("you cannot buy the bike");
  }  
  else {
    console.log("you can buy the bike or you cannot buy the bike");
  }

 const hasexp= true;
 const hasdegree = false;

 if(hasexp && hasdegree){
    console.log("you are eligible for the job");
 }
 else if(hasexp || hasdegree){
    console.log("you are not eligible for the job");
  }
 
  const semester= 6;
    switch(semester){
      case 1:
        console.log("you are in first semester");
        break;
      case 2:
        console.log("you are in second semester");
        break;
      case 3:
        console.log("you are in third semester");
        break;
      case 4:
        console.log("you are in fourth semester");
        break;
      case 5:
        console.log("you are in fifth semester");
        break; 
      case 6:
        console.log("you are in sixth semester");
        break;//break statement is used to exit the switch case//if continue is used to skip the current iteration and continue with the next one
      default:
        console.log("you are not in any semester");
        break;

    }
    //truthly and falsy values
    //falsy values: 0, "", null, undefined, NaN
    //truthy values: "0", " ", [], {}, true, 1, -1, Infinity, -Infinity

    const array = [1, 2, 3, 4, 5];
    if(array.length === 0)
    {
      console.log("array is empty");
    }
    else{
      console.log("array is not empty");
    }

    const obj={
      name: "John",
      age: 30
    }

    if(Object.keys(obj).length === 0){
      console.log("object is empty");
    }
    else{
      console.log("object is not empty");
    }

    //null coalescing operator
    const value = null;
    const defaultValue = "default value";
    const result = value ?? defaultValue; // if value is null or undefined, defaultValue will be used
    console.log(result); // Output: "default value"

    const result2= 10 ?? 20; // if 10 is not null or undefined, it will be used
    console.log(result2); // Output: 10

//ternary operator
const temp= 20;
temp>30 ? console.log("It's hot") :console.log("its cold")
