const school ={
    name: "NITRO",
    location: "India",
    students: 1000,
    courses: ["JavaScript", "Python", "Java"]

}
const{location, students} = school;
console.log(location); // Accessing the location property using destructuring
const{name:n}= school;
console.log(n); // Accessing the name property using destructuring
console.log(school.name); // Accessing the name property using dot notation

// JSON API example
//json api is written in this format 
/* {
    "name": "NITRO",
    "location": "India",
    "students": 1000,
    "courses": ["JavaScript", "Python", "Java"]
} */
//they can also occur in array format