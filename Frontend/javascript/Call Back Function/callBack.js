// let name = prompt("Enter you are name: ")
// let age = Number(prompt("Enter your age: ")) 
// function first(name,age,dhairya){
//     console.log("Hello, "+name)
//     console.log("Your age is "+age)
//     second()
// }
// function second(){
// }
// first(name,age,second())







// let a = prompt("Enter your name: ")
// let b = prompt("Enter grade you study: ")
// let func1 = function(a,b,fun){
//     console.log("your name is "+b+" and you suydy in "+b)
//     fun()  //this fun() function is representing func2() function
// }
// let func2 = function(){
//     console.log("This is second anonymous function.")
// }
// func1(a,b,func2)






// let user = Number(prompt("Enter a number: "))

// let main1 = function(user,func){
//     func()
// }
// let main2 = function(){
//     if(user%2===0){
//         console.log(user+" is a even number.")
//     }
//     else{
//         console.log(user+" is a odd number.")
//     }
// }

// main1(user,main2)







// let main1 = function(user,func){
//     func(user)
// }

// let user = Number(prompt("Enter a number: "))

// main1(user,function(user){
//     if(user%2===0){
//         console.log(user+" is a even number.")
//     }
//     else{
//         console.log(user+" is a odd number.")
//     }
// })










// let main1 = function(userInput1,userInput2,add,sub,mul,div){
//     add(userInput1,userInput2)
//     sub(userInput1,userInput2)
//     mul(userInput1,userInput2)
//     div(userInput1,userInput2)
// }
// let func1 = function(userInput1,userInput2){
//     let add = userInput1 + userInput2
//     console.log("The sum is "+add)
// }
// let func2 = function(userInput1,userInput2){
//     let sub = userInput1 - userInput2
//     console.log("The difference is "+sub)
// }
// let func3 = function(userInput1,userInput2){
//     let mul = userInput1 * userInput2
//     console.log("The product is "+mul)
// }
// let func4 = function(userInput1,userInput2){
//     let div = userInput1 / userInput2
//     console.log("The quotient is "+div)
// }

// let userInput1 = parseInt(prompt("Enter first number: "))
// let userInput2 = parseInt(prompt("Enter second number: "))

// main1(userInput1,userInput2,func1,func2,func3,func4)






// directly

// let main1 = function(userInput1,userInput2,add,sub,mul,div){
//     add(userInput1,userInput2)
//     sub(userInput1,userInput2)
//     mul(userInput1,userInput2)
//     div(userInput1,userInput2)
// }
// let userInput1 = parseInt(prompt("Enter first number: "))
// let userInput2 = parseInt(prompt("Enter second number: "))

// main1(userInput1,userInput2,function(userInput1,userInput2){
//     let add = userInput1 + userInput2
//     console.log("The sum is "+add)
// },function(userInput1,userInput2){
//     let sub = userInput1 - userInput2
//     console.log("The difference is "+sub)
// },function(userInput1,userInput2){
//     let mul = userInput1 * userInput2
//     console.log("The product is "+mul)
// },function(userInput1,userInput2){
//     let div = userInput1 / userInput2
//     console.log("The quotient is "+div)
// })







// let main = function(userInput,func){
//     func(userInput)
// }

// let checker = function(userInput){
//     if(userInput<18){
//         console.log("Your are not eligible for vote")
//     }
//     else{
//         console.log("You are eligible for vote")
//     }
// }

// let userInput = parseInt(prompt("Enter your age: "))
// main(userInput,checker)







//  let main = function(userInput,func){
//      func(userInput)
//  }
 
//  let counter = function(userInput){
//      console.log("Your name contains "+userInput.length+" letters")
//  }
 
//  let userInput = prompt("Enter your name: ")
//  main(userInput,counter)







// let main = function(userInput,func){
//     func(userInput)
// }

// let checker = function(userInput){
//     if(userInput[0] === userInput[0].toUpperCase()){
//         console.log("The first letter is capital.")
//     }
//     else{
//         console.log("The first letter is not capital.")
//     }
// }

// let userInput = prompt("Enter any string: ")






// write a program to concatinate different words given by the user using the exact same number of call back function as the userInput


// My name is nayan pathak
// i live in btm
// My age is 7897
// I am studying JS.




