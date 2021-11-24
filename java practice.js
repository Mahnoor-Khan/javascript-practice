
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
    street:25,
    city:'bwp',
    country:'pakistan',
}
const {street:st,city:ct} = address;
console.log(st,ct)

//spread operator
const first={name:"Ahmed"}
const second={age:25}
const combined ={ ...first , ...second}
console.log(combined)

//Classes
class persons{
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log("walk");
    }
};
const person1= new persons('zainab')
console.log(person1)
const person2= new persons('zain')
console.log(person2)
const person3= new persons('rameen')
console.log(person3)

//inheritance
class Teachers extends persons{
    constructor(name,degree){
        super(name)
        this.degree=degree
    }
    teach(){
        console.log("teach");
    }
}
const teacher = new Teachers('amna','M.phill')
console.log(teacher)
const teacher1 = new Teachers('Aleena','Inter')
console.log(teacher1)
const teacher2 = new Teachers('Rida','Mster in CS')
console.log(teacher2)



