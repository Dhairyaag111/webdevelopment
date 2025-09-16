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




// let main = function(a,b,c,d,f1,f2,f3,f4){
//     f1(a)
//     f2(b)
//     f3(c)
//     f4(d)
//     console.log(`${a} ${b} ${c} ${d}`)
// }

// let first = function(a){
//     return a
// }
// let second = function(b){
//     return b
// }
// let third = function(c){
//     return c
// }
// let fourth = function(d){
//     return d
// }


// let a = prompt("Enter your name: ")
// let b = prompt("Enter your address: ")
// let c = prompt("Enter your age: ")
// let d = prompt("Enter the grade you are studying: ")
// main(a,b,c,d,first,second,third,fourth)







// let main = function(array1,func){
//     for(let i = 0; i<array1.length; i++){
//     console.log(func(array1[i]))
//     }
// }

// let secondFunction = function(number){
//         return number*2
// }

// let array1 = [1,2,3,4,5]
// main(array1,secondFunction)









// let main = function(a,b,func){
//     if(a>b){
//         func(a,b,"mul")
//     }
//     else{
//         func(a,b,"add") 
//     }
// }

// let second = function(a,b,value){
//     if(value==="mul"){
//         console.log("The product is "+a*b)
//     }
//     else{
//         console.log("The sum is "+(a+b))
//     }
// }

// let a = Number(prompt("Enter first number: "))
// let b = Number(prompt("Enter second number: "))
// main(a,b,second)







// task to reverse letters of a "callback",convert "callback" into "callfront", make "callback" capital


// let main = function(word, func1, func2, func3) {
//     console.log(func1(word))
//     console.log(func2(word))
//     console.log(func3(word))
// }

// let secondFunction = function(word) {
//     return  word.toUpperCase()
// }
// let thirdFunction = function(word) {
//     return word.split("").reverse().join("")
// }
// let fourthFunction = function(word) {
//     return word.replace("back", "front")
// }

// main("callback", secondFunction, thirdFunction, fourthFunction)








// let main = function(array1,func1){
//     console.log(func1(array1))
// }

// let secondFunction = function(array1){
//      let result = array1.map(function(num){
//          return num*num*num
//      }) 
//      return result
// }
// let a = [5,10,15,20,25]
// main(a,secondFunction)








// let main = function(array1, func1) {
//     console.log(func1(array1))
// }

// let second = function(array1) {
//     let result = array1.map(function(num) {
//         let counter = 0
//         for (i = 1; i <= num; i++) {
//             if (num % i === 0) {
//                 counter++
//             }
//         }
//         if (counter > 2) {
//             return (num + " is not a prime number.")
//         } else {
//             return (num + " is a prime number.")
//         }
//     })
//     return result
// }

// let a = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// main(a, second)







// reverse number using call back for 4 digit



// let main = function(number,func){
//     console.log(func(number))
// }

// let second = function(number){
    
// let l = number%10
//     let sl = (number/10>>0)%10
//     let s = (number/100>>0)%10
//     let f = number/1000>>0
//     return l+""+sl+""+s+""+f

// // // // // // return (number.toString()).split("").reverse().join("")

// }

// let number = Number(prompt("Enter a  4 digit number:  " ))
// main(number,second)






// let main = function(number, func) {
//     console.log(func(number))
// }

// let second = function(number) {

//     return (number.toString()).split("").reverse().join("")


// }

// let number = Number(prompt("Enter a  4 digit number:  "))
// main(number, second)