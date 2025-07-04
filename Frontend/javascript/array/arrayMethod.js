// length method

// let fruits = ["apple","mango","oragne","banana","watermelon"]
// let size = fruits.length
// console.log(size)
 
 
// let array = []
// console.log(array.length)

// array.length = 5
// console.log(array.length)



// to string method

// let num = [1,2,3,4,5]
// let second = num.toString()
// let sum = 0
// for(i=1; i<num.length; i++){
// sum = sum + num[i]
// }
// console.log(sum)



// at method

// let fruits = ["apple","mango","orange","banana","watermelon"]
// let fruit = fruits.at(2)
// console.log(fruit)



// join method

// let fruits = ["apple","mango","orange","banana","watermelon"]
// let variable = fruits.join()
// console.log(variable)
// let variable2 = fruits.join(" ~ ")
// console.log(variable2)



// pop method

// let fruits = ["apple","mango","orange","banana","watermelon"]
// fruits.pop()
// console.log(fruits)



//  push method()
 
// let fruits = ["apple","mango","orange","banana","watermelon"]
// fruits.push("grapes")
// console.log(fruits)


// let fruits = ["apple","mango","orange","banana","watermelon"]
// fruits.push("grapes", "guava")
// console.log(fruits)



// shift method

// let fruits = ["apple","mango","orange","banana","watermelon"]
// fruits.shift()
// console.log(fruits)


// let fruits = ["apple","mango","orange","banana","watermelon"]
// let variable = fruits.shift()
// console.log(variable)



// unshift method

// let fruits = ["apple","mango","orange","banana","watermelon"]
// fruits.unshift("grapes")
// console.log(fruits)


//  let fruits = ["apple","mango","orange","banana","watermelon"]
// fruits[5] = "grapes"
//  console.log(fruits)


//  let fruits = ["apple","mango","orange","banana","watermelon"]
// fruits[fruits.length] = "grapes"
//  console.log(fruits)



// delete method

//  let fruits = ["apple","mango","orange","banana","watermelon"]
//  delete fruits[3]
//  console.log(fruits)
 
 
 
//  concat method

//  let fruits = ["apple","mango","orange","banana","watermelon"]
//  let vegetable = ["potato" , "tamato" , "cabbage" , "cauliflower" , "brinjal"]
//  let plants = fruits.concat(vegetable) 
//  console.log(plants)


//  let fruits = ["apple","mango","orange","banana","watermelon"]
//  let vegetable = ["potato" , "tamato" , "cabbage" , "cauliflower" , "brinjal"]
//  let array = [1,2,3,4,5]
//  let array2 = ["hello", "hi" , "laptop" , "computer", "cpu"]
//  let plants = fruits.concat(vegetable,array,array2) 
//  console.log(plants)


// let fruits = ["apple","mango","orange","banana","watermelon"]
// let second =  fruits.concat("grapes", "guava")
// console.log(second)



// copy Within method

// let fruits = ["apple","mango","orange","banana","watermelon"]
// console.log(fruits)
// fruits.copyWithin(0,2)
// console.log(fruits)


// let fruits = ["apple","mango","orange","banana","watermelon","grapes","pineapple"]
// console.log(fruits)
// fruits.copyWithin(2,0,3)
// console.log(fruits)



// flat method

// let num = [[1,2],[3,4],[5,6]]
// let num1 = num.flat()
// console.log(num1)



//  flatmap metod

// let num = [1,2,3,4,5,6]
// let newArray = num.flatMap(y=> [y+2])
// console.log(newArray)


// let num = [1,2,3,4,5,6]
// let newArray = num.flatMap(y=> [y*5])
// console.log(newArray)


// let fruits = ["apple","mango"]
// let  newArray = fruits.flatMap(s=> [s + " is a fruit"])
// console.log(newArray)


// splice method

// let fruits = ["apple","mango","orange","banana","watermelon","grapes","pineapple"]
// fruits.splice(2,1,"plum")
// console.log(fruits)