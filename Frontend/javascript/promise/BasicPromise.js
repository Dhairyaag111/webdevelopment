// let userInput = Number(prompt("Enter your age: "))
// let promise = new Promise((resolve, reject) => {
//     if (userInput > 17) {
//         resolve("Eligible for vote")
//     } 
//     else {
//         reject(" Not eligible for vote")
//     }
// })

// promise.then(function(message) {
//     console.log(message)
// }).catch(function(err) {
//     console.log(err)
// })






// const prom = new Promise((resolve, reject)=>{
//     let counter = 0
//     let interval = setInterval(()=>{
//         console.log(counter)
//         counter++
//         if(counter===6){
//             resolve("I will run after 5 seconds ☺️")
//             clearInterval(interval)
//         }
//     }, 1000)
// }).then((mssg)=> console.log(mssg))







// let u = prompt("enter your birth year: ")
// let promise = new Promise((resolve,reject)=>{
// let date = new Date
// let a = date.getFullYear()-u
// resolve("You are "+a+" years old.")
// })
// promise.then((message)=>{
//     console.log(message)
// })







// let u = prompt("enter something:")
// let promise = new Promise((resolve,reject)=>{
//     if(typeof(u)===Number){
//         resolve("You entered a number")
//     }
//     else{
//         reject("You didn't entered a number")
//     }
// })
// promise.then((message)=>{
//     console.log(message)
// }).catch((err)=>{
//     console.log(err)
// })








// let name = prompt("Enter your name: ")
// let age = Number(prompt("Enter your age: "))
// let promise = new Promise((resolve)=>{
//     resolve({
//         n: name,
//         a: age
//     })
// })

// promise.then((obj)=>{
//     console.log(obj.n)
//     return obj
// }).then((obj)=>{
//     console.log("Hello Good afternoon! "+obj.n)
//     return obj
// }).then((obj)=>{
//     console.log("Hello Good afternoon! "+obj.n+" you are "+obj.a+" years old")
// })









// let promise = new Promise((resolve)=>{
//     resolve({
//         name: "sita",
//         age: 20
//     })
// })

// promise.then(obj=>{
//     console.log(obj.name)
//     return obj
// }).then(obj=>{
//     console.log(obj.age)
// })








// let userInput = Number(prompt("Enter a number: "))
// let promise = new Promise(resolve=>{
//     resolve(userInput)
// })
// promise.then(value=>{
//     if(value%2===0){
//         console.log("Its a even number.")
//     }
//     else{
//         throw new Error("You entered an odd number.")
//     }
// }).catch((err)=>{
//     console.log(err.message)
// })







// let userInput = Number(prompt("Enter a number: "))
// let promise = new Promise(resolve=>{
//     if(userInput%2===0){
//         resolve("Its a even number.")
//     }
//     else{
//         throw new Error("You entered an odd number.")
//     }
// })
// promise.then(value=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log(err.message)
// })









// let name = prompt("Enter your name: ")
// let age = prompt("Enter your age: ")
// let promise = new Promise(resolve => {
//     resolve({
//         userName: name,
//         userAge: age,
//     })
// })

// promise.then(obj => {
//         obj.isAdult = obj.userAge>17
//     return obj
// }).then(obj => {
// console.log(obj.userName+" is a "+(obj.isAdult? "is not a minor":"is a minor"))
// })