
// let student = {
//     name: "Dhairya",
//     age: 15,
//     address: "birtamode",
//     school: "Green Field World School",
//     grade : "10 'A'",
//     house: "Yellow"
// }

// for (key in student){
//     console.log(`${key} : ${student[key]}`)
// }


// let student = {
//     name: "Dhairya",
//     age: 15,
//     address: "birtamode",
//     school: "Green Field World School",
//     grade : "10 'A'",
//     house: "Yellow"
// }
// let counter = 0
// for (let keys in student){
//         counter++
// }
// console.log(`Number of properties is ${counter}`)
// let count = Object.keys(student).length
// console.log(count)



// let person = {
//     isMarried: false,
//     isageMoreThan10: true,
//     isBoy: true,
//     studiesInGrade10: true,
//     eligibleForVote: false
// }
// let c = 0
// for(key in person){
// if(person[key] == true)
// c++
// }
// console.log(`Number of true properties is ${c}`)
 

// let person = {
//     isMarried: false,
//     isageMoreThan10: true,
//     isBoy: true,
//     studiesInGrade10: true,
//     eligibleForVote: false,
//     name: "Dhairya"
// }
// let c = 0
// for(let key in person){
//     if(typeof(person[key]) == "boolean"){
//         c++
//         }
// }
// console.log(`Number of boolean properties is ${c}`)



// let student = {
//     name: "Dhairya",
//     age: 15,
//     address: "birtamode",
//     school: "Green Field World School",
//     grade : "10 'A'",
//     house: "Yellow"
// }

// for(key in student){
//  console.log(`${key.toUpperCase()} : ${student[key]}`)
// }


// let person = {
//     name: "Dhairya",
//     age: 15,
//     isMarried: "No",
//     address: "Birtamode,Jhapa",
//     grade: 10,
//     birthYear: 2009
// }
// for(key in person){
//     if(typeof person[key] == "number")
//     console.log(`${key} : ${person[key]}`)
// }



// let person = {
//     name: null,
//     age:null,
//     isMarried: "No",
//     address: undefined,
//     grade: null,
//     birthYear: undefined
// }
// for(key in person){
//     if(person[key] == undefined ||  person[key] == null){
//     console.log(`${key} : ${person[key]}`)
//     }
// }




// let person = {
//     name: "Dhairya",
//     age: 15,
//     isMarried: "No",
//     address: "Birtamode,Jhapa",
//     grade: 10,
//     birthYear: 2009
// }
// for(let keys in person){
//   if(typeof (person[keys]) == "string"){
//       if((person[keys].length)>4){
//           console.log(`${keys} : ${person[keys]}`)
//       }
//   }
// }




// let person = {
//     name: "Dhairya",
//     age: 15,
//     isMarried: "No",
//     address: "Birtamode,Jhapa",
//     grade: 10,
//     birthYear: 2009
// }
// let counter = 0
// for(key in person){
//  if(key.startsWith("a") || key.startsWith("e") || key.startsWith("i") || key.startsWith("o") || key.startsWith("u")){
//      counter++
//      console.log(`${key} : ${person[key]}`)
//  }
// }
// console.log("")
// console.log(`Number of vowel keys is ${counter}`)


// let person = {
//     name: "Dhairya",
//     age: 15,
//     isMarried: "No",
//     address: "Birtamode,Jhapa",
//     grade: 10,
//     birthYear: 2009
// }
// let counter = 0
// for(key in person){
//  if(key[0] == "a" || key[0] == "e" || key[0] == "i" || key[0] == "o" || key[0] == "u"){
//      counter++
//      console.log(`${key} : ${person[key]}`)
//  }
// }
// console.log("")
// console.log(`Number of vowel keys is ${counter}`)








// let person = {
//     name: "Dhairya",
//     age: 15,
//     isMarried: "No",
//     address: "Birtamode,Jhapa",
//     grade: 10,
//     birthYear: 2009
// }
// let counter_key = 0
// let counter_value = 0
// for (key in person) {
//     if (typeof key == "string") {
//         counter_key++
//     }
//     if (typeof(person[key]) == "string") {
//         counter_value++
//     }
// }
// console.log(`number of string key is ${counter_key}`)
// console.log(`number of string value is ${counter_value}`)





// let person = {
//     name: "Dhairya",
//     age: 15,
//     isMarried: "No",
//     address: "Birtamode,Jhapa",
//     grade: 10,
//     birthYear: 2009
// }
// const person2 = {
//     }
// for(key in person){
//     if(typeof (person[key]) == "number"){
//         person2[key] = person[key]
//          console.log(`${key} : ${person2[key]}`)
//     }
// }





// let person = {
//     name: "Dhairya",
//     age: 15,
//     isMarried: false,
//     address: "Birtamode,Jhapa",
//     grade: 10,
//     birthYear: 2009,
//     salary: null
// }
// let person2 = {
    
// }
// for(key in person){
//     person2 = person
//    person2[key] = typeof(person[key])
// }
// console.log(person2)






// let person = {
//     name: "Dhairya",
//     age: 15,
//     isMarried: false,
//     address: "Birtamode,Jhapa",
//     grade: 10,
//     birthYear: 2009,
//     notGettingSalary: true
// }

// for(key in person){
//    if(typeof(person[key]) == "boolean"){
//        if(person[key]==true){
//            person[key]= "yes"
//    }
//    else{
//        person[key] = "no"
//    }
// }
// }
// console.log(person)




// let person1 = {
//     name: "Dhairya",
//     Age: 15,
//     IsMarried: "No",
//     Sn: 1,
//     address: "Birtamode,Jhapa",
//     Grade: 10,
//     birthYear: 2009,
//     section: "A"
// }
// for(key in person1){
// if(key.length>4){
//     console.log(`${key} : ${person1[key]}`)
// }
// }





//   let person1 = {
//     name: "Dhairya",
//     age: 15,
//     address: "birtamode",
//     school: "Green Field World School",
//     grade : "10 'A'",
//     house: "Yellow"
// }
// for(let keys in person1){
// if(typeof(person1[keys]) === "string"){
//     let data = person1[keys]
//     let rev = ""
//     for(let i =data.length-1; i>=0; i--){
//         rev =rev +  data[i]
//     }
// console.log(`${keys} : ${rev}`)
// }
// }




//   let person1 = {
//     name: "Dhairya",
//     age: 15,
//     address: "birtamode",
//     school: "Green Field World School",
//     grade : "10 'A'",
//     house: "Yellow"
// }

// let person2 = {
// }

// for(let key in person1){
//     person2[person1[key]] =  key
//     }
//     console.log(person2)


