for(let i=9;i<=9;i++){
    for(let j=1;j<10;j++){
        console.log(i + " * " + j + " = " + (i * j));
    }
}//table of 9
 
let array =[ 1,2,3,4,5,6,7,8,9,"suyog"];
for (let i=0;i<array.length;i++)
{
    const element = array[i];
    console.log(element);
}

//while loop
array=["cr7","messi","neymar","mbappe"];
let arr=0;
while(arr<array.length){
    console.log(`the list of players is ${array[arr]}`);
    arr++;
}
//do while loop
//the do while loop will execute the code at least once even if the condition is false
let goals=1;
do{
    console.log(`the player has ${goals} goals`);
    goals++;
}while(goals<=3);

const arr1 = [1, 2, 3, 4, 5];//for of loop
//the for of loop is used to iterate over the elements of an array
for (const num of arr1){
    console.log(num);
}

const names="suyog gautam";
for(const char of names){
    console.log(char);
} 


const arrayyy=["suyog","gautam","nepal"];
for (const k of arrayyy){
    console.log(`the name is ${k}`);
} //for in loop is used to iterate over the properties of an object or the indices of an array
//the difference between for of and for in loop is that for of loop iterates over the values of an array while for in loop iterates over the indices of an array or the properties of an object

const obj={
    name: "suyog",
    age: 20,
    country: "nepal"

}
for (const first in obj){
    console.log(`${first}: ${obj[first]}`);
}

//for each loop

const favseries=["breaking bad", "dark", "stranger things"];

favseries.forEach(function (val){
    console.log(`my favorite series is ${val}`);
})

favseries.forEach((item,index,array)=>{
    console.log(item,index,array);
})

function display(item){
    console.log(`my favorite series is ${item}`);
}
favseries.forEach(display);

const clubfootball=[
    {
        name: "Real Madrid",
        country: "Spain"
    },
    {
        name: "Barcelona",
        country: "Spain"
    },
    {
        name: "Manchester United",
        country: "England"
    },
    {
        name: "Bayern Munich",
        country: "Germany"

    },

]
clubfootball.forEach(item => {
    console.log(`the club name is ${item.name} and the country is ${item.country}`);

}

)

//this example of array including objects and using forEach to iterate over the array is used in databases and APIs to fetch data and display it in a user-friendly format
