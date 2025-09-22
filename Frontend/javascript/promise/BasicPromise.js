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








// create a promise that resolvs with 100,throw an error if number is 100.catch it,return 50,then in the next .then,add 25 and lock the result


// let promise = new Promise(resolve=>{
//     resolve(100)
// })

// promise.then(value=>{
//     if(value===100){
//         throw("The number you entered is exactly 100")
//     }
// }).catch(err=>{
//         console.log(err)
//         return 50
// }).then(value=>{
//     console.log("The final output is "+(value+25))
// })






// create a promise that resolvs with 10. first .then should return a new promise that doubles the number after 2 seconds.second .then should triple the number after 4 seconds. third .then should find the square,cube and square root of that number


// let user = Number(prompt("Enter a number: "))
// let promise = new Promise(resolve=>{
//     resolve(user)
// })

// promise.then(value=>{
//     setTimeout(()=>{
//         console.log(value*2)
//     },2000)
//     return value
// }).then(value=>{
//     setTimeout(()=>{
//     console.log(value*3)
//     },4000)
//     return value
// }).then(value=>{
//     console.log(value*value)
//     console.log(value*value*value)
//     console.log(Math.sqrt(value))
//     })





// WAP a program to a,b,c using promise and it's then

// let promise = new Promise(resolve=>{
//     resolve("a")
// })

// promise.then((value)=>{
//     return Promise.resolve(value+"b")
// }).then(value2=>{
//     console.log(value2+"c")
// })








// let userName = prompt("Enter your name: ")
// let userMarks = Number(prompt("Enter your marks: "))
// let promise = new Promise(resolve=>{
//     resolve({
//         name: userName,
//         marks: userMarks
//     })
// })
// promise.then(obj=>{
//     obj.isPassed = obj.marks>=40 ? "Pass": "Fail"
//     return obj
// }).then(obj=>{
//     console.log(obj.name+" has "+(obj.isPassed)+"ed")
// })

