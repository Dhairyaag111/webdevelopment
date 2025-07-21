// let person = {
//     name: "Dhairya",
//     age: 15,
//     isMarried: "No",
//     address: "Birtamode,Jhapa"
// }
// for( let key in person){
//     console.log(`${key} : ${person[key]}`)
// }



// let student = {
//     name: "Dhairya",
//     age: 15,
//     address: "birtamode",
//     school: "Green Field World School",
//     grade : "10 'A'"",
//     house: "Yellow"
// }

// for (key in student){
//     console.log(`${key} : ${student[key]}`)
// }


let student = {
    name: "Dhairya",
    age: 15,
    address: "birtamode",
    school: "Green Field World School",
    grade : "10 'A'",
    house: "Yellow",
}
let counter = 0
for (key in student){
        counter++
}
console.log(`Number of properties is ${counter}`)

