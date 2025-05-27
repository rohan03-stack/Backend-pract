const Persons = {
    Rahul: 18,

    Raj: 19,

    Kunal: 9,

    Abhi:17,

    Ajay: 25,

    Arjun: 68,

    Brijesh: 32,

    mehfooz: 19,

    arnav: 33,


};



// Print all the persons, whos age is 18 or above 18, in acceding order according to their age

//  Expect output 

// ["Rahul", "Raj", "Ajay,"]

let arr = [];

for (const key in Persons) {
 if(Persons[key] >= 18){
    arr.push({name: key, age: Persons[key]})
 }
 console.log(arr);
 
}

const result = arr.sort((a,b) => a.age - b.age);

console.log(result);

