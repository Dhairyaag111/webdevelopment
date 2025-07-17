const carsDetails = {
    
carName: "Deepal",
color: "light green",
price: 8500000,
isSold: true,
cc: 1500 
}
const name = carsDetails.carName
console.log(name)




const person = new Object()
person.firstName = "Ram"
person.lastName = "Poudel"
person.age = 25
person.eyeColor = "brown"
person.isMarried = true

console.log(person.firstName)

console.log(person["firstName"])




const person = new Object()
person.firstName = "Ram"
person.lastName = "Poudel"
person.age = 25
person.eyeColor = "brown"
person.isMarried = true

let variable = person
variable["age"] = 26
console.log(person.age)