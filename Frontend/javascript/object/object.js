// const carsDetails = {
    
// carName: "Deepal",
// color: "light green",
// price: 8500000,
// isSold: true,
// cc: 1500 
// }
// const name = carsDetails.carName
// console.log(name)




// const person = new Object()
// person.firstName = "Ram"
// person.lastName = "Poudel"
// person.age = 25
// person.eyeColor = "brown"
// person.isMarried = true

// console.log(person.firstName)

// console.log(person["firstName"])




// const person = new Object()
// person.firstName = "Ram"
// person.lastName = "Poudel"
// person.age = 25
// person.eyeColor = "brown"
// person.isMarried = true

// let variable = person
// variable["age"] = 26
// console.log(person.age)




// const carsDetails = {
    
// carBrand: "Renault",
// carName: "Duster",
// color: "White",
// isSold: true,
// capacity: 5,
// milage: "10km/ltr"
// }
// carsDetails.cc = 1500
// console.log(carsDetails.cc)




// const carsDetails = {
    
// carBrand: "Renault",
// carName: "Duster",
// color: "White",
// isSold: true,
// capacity: 5,
// milage: "10km/ltr"
// }
// carsDetails.cc = 1500
// delete carsDetails.cc
// console.log(carsDetails.cc)




// let u = Number(prompt ("Enter any number from 1 to 10: "))


// const carsDetails = {
    
// carBrand: "Renault",
// carName: "Duster",
// color: "White",
// isSold: true,
// price: 3500000,
// capacity: 5,
// milage: "10km/ltr",
// }

// let d = carsDetails.price * u/100
// carsDetails.discount = d
// console.log(carsDetails.discount)






// let object = prompt("Enter the name of your object(i.e car): ")
// let carBrand = prompt ("Enter car brand: ")
// let carName = prompt ("Enter car name: ")
// let carColor = prompt ("Enter car color: ")
// let carPrice = Number(prompt ("Enter car price: "))
// let carCapacity = Number(prompt ("Enter car capacity: "))
// let carMilage = Number(prompt ("Enter car milage: "))

// const carsDetails = {
  
// }

//  carsDetails.brand = carBrand
//  carsDetails.color = carColor
//  carsDetails.name = carName
//  carsDetails.price = carPrice
//  carsDetails.capacity = carCapacity
//  carsDetails.milage = carMilage
 
 //  console.log("")
// console.log("The car brand is "+carsDetails.brand)
// console.log( "The car color is "+carsDetails.color)
// console.log("The car name is "+carsDetails.name )
// console.log( "The car price is "+carsDetails.price )
// console.log("The car capacity is "+ carsDetails.capacity)
// console.log("The car milage is "+ carsDetails.milage)




//  this.

// const person  = {
//     firstName: "Dhairya",
//     lastName: "Agrawal",
//     id: 43324,
//     fullName : function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(person.fullName())




// const laptop = {
//     color: prompt("Enter the color of your laptop: "),
//     RAM:  prompt("Enter the RAM of the laptop: "),
//     size: prompt("Enter the size of the laptop: "),
//     os: prompt("Enter the operating sysetm of the laptop: "),
//     generation: prompt("Enter the generation of the laptop: "),
//     brand:prompt("Enter the brand name of your laptop: "),
    
//     details: function (){
//         return `The brand name is ${this.brand} , its color is ${this.color} , the size is ${this.size} , its os is ${this.os} , it is ${this.generation} and it has ${this.RAM} RAM in it`
//     }
// }
// console.log(laptop.details())




// const laptop = {
//     color: prompt("Enter the color of your laptop: "),
//     brand:prompt("Enter the brand name of your laptop: "),
    
// }
//     laptop.details = function (){
//         return `(${this.color} color laptop of ${this.brand})`.toUpperCase()
//     }

// console.log(laptop.details())