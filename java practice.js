
//arrow function
const person={
    name:"ayesha",
    age:20,
}
console.log(person);
const square = number => number*number;
console.log(square(5));

//filter function

const jobs=[
    { id:1, isActive:true},
    { id:2, isActive:false},
    { id:3, isActive:true},
];
const activeJobs= jobs.filter(job=>job.isActive)
console.log(activeJobs);

//.map()
const colors=[ "red","blue","green"]
const items=colors.map(color =>`<li>${color}</li>`)
console.log(items);

//assigning object member to a new seperate constant or variable
const address={
    street:'',
    city:'',
    country:'',
}
const {street:st,city:ct} = address;
console.log(st,ct)