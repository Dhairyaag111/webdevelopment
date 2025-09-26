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









// let promise = new Promise(resolve=>{
//     resolve("start")
// })

// promise.then(value=>{
//     throw("It is an error.")
// }).catch(err=>{
//     console.log(err)
//     return "recovered"
// }).then(val2=>{
//     console.log(val2)
// })







// Start with a Promise that resolves with 2.
// First .then() multiply by 2.
// Second .then() add 5 after 0.5 sec (use another Promise).
// If result > 8, throw error "Too big!".
// Catch error, return 1.
// Multiply by 10 in final .then() and log result.


// let promise = new Promise(resolve=>{
//     resolve(2)
// })

// promise.then(value=>{
//     return value*2
// }).then(val2=>{
//     return new Promise(resolve=>{
//   setTimeout(()=>{
//      resolve(val2+5)
//     },500 )
//     })
// }).then(val3=>{
//     if(val3>8){
//         throw ("The number is too big")
//     }
// }).catch(err=>{
//     console.log(err)
//     return 1    
// }).then(val4=>{
//     console.log(val4*10)
// })







// // Create a Promise that resolves with "javascript".
// First .then() → convert to uppercase.
// Second .then() → take first 4 letters.
// Third .then() → add " is fun".
// Log the final string.


// let promise = new Promise(resolve=>{
//     resolve("javascript")
// })
// promise.then(value=>{
//     return value.toUpperCase()
// }).then(val2=>{
//     return val2[0]+val2[1]+val2[2]+val2[3]
// }).then(val3=>{
//     console.log(val3+" is fun")
// })








// let promise = new Promise(resolve=>{
//     resolve([1,2,3,4,5])
// })

// promise.then((val)=> val.map(b => b*2)).then((val)=>{
//     return val.filter(b =>b>5)
// }).then(val => console.log(val))








// Create a Promise that resolves with { name: "Aarav", score: 35 }.
// If score < 40, throw "Failed".
// Catch it and set score to 50.
// Add status: "Pass" and log the object.


// let promise = new Promise(resolve=>{
//     resolve({
//         name: "Aarav",
//         score: 35
//     })
// })
// promise.then(obj=>{
//     if(obj.score<40){
//         throw ("Failed")
//     }
// }).catch(err=>{
//     console.log(err)
//     return ({
//         name: "Aarav",
//         score: 35
//     })
// }).then(obj=>{
//     obj.status = obj.score>40? "pass":"fail"
//     console.log(obj)
// })











// Reverse + Join Chain
// Create a Promise that resolves with "hello world".
// First .then() → split into array of words
// Second .then() → reverse the array.
// Third .then() → join with " - ".
// Log the result.


// output

// ["hello","world"]      
// ["world","hello"]     
// "world - hello"



// let promise = new Promise(resolve=>{
//     resolve("hello world")
// })

// promise.then(value1=>{
//     let v = value1.split(" ")
//     console.log(v)
//     return v
// }).then(v=>{
//     console.log(v.reverse())
//    return v.reverse()
// }).then(v=>{
//     console.log(v.reverse().join("- "))
// })







// Async Array Chain (with setTimeout)
// Create a Promise that resolves with [2, 4, 6].
// First .then() → return new Promise that adds 1 to each element after 1 second.
// Second .then() → log the new array.

// Output : [3, 5, 7]


// let promise = new Promise(resolve=>{
//     resolve([2,4,6])
// })
// promise.then(arr1=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve( arr1.map(a=> a+1))
//         },3000)
//     })
// }).then(arr2=>{
//     console.log(arr2)
// })








// let promise = new Promise(resolve=>{
//     resolve({
//         number:7,
//         word:"banana"
//     })
// })
// promise.then(obj=>{
//     obj.number = obj.number*obj.number
//     return obj
// }).then(obj=>{
//     return obj.number+"-"+obj.word
// }).then(val=>{
//     console.log(val.length)
// })







// let promise = new Promise(resolve=>{
//     resolve(["Ram","Sita","Hari","Rita"])
// })
// promise.then(arr=>{
//     let arr2 = arr.filter(a=> a.startsWith("R"))
//     return arr2
// }).then(arr2=>{
//     let c =  arr2.map(b=> b.toUpperCase())
//     return c
// }).then(arr3=>{
//     console.log(arr3)
// })








// let promise = new Promise(resolve=>{
//     resolve({
//         city : "Kathmandu",
//         population : 1500000
//     })
// })
// promise.then(obj=>{
//     if (obj.population<1000000) throw ("Too Small")
//     return obj
// }).catch(err=>{
//     console.log(err)
//     return ({city : "Pokhara", population : 500000})
// }).then(obj=>{
//     obj.country = "Nepal"
//     return obj
// }).then(obj=>{
//     console.log(obj)
// })








// let promise = new Promise(resolve=>{
//     resolve("madam")
// })
// promise.then(val1=>{
//    return  val1.split("").join("")
// }).then(val2=>{
//     if(val2.split("").reverse().join("")===val2) return "Palindrone"
//     else return "Not palindrone"
// }).then(val3=>{
//     console.log(val3)
// })







// Error if Array Empty
// Create a Promise that resolves with [].
// First .then() → if array is empty, throw "No data!".
// Catch error → return [1, 2, 3].
// Next .then() → double each number.
// Log the result.



// let promise = new Promise(resolve=>{
//     resolve([])
// })
// promise.then(arr=>{
//     if (arr.length===0) throw "NO data"
//     return arr
// }).catch(err=>{
//     console.log(err)
//     return [1,2,3]
// }).then(arr=>{
//     console.log(arr.map(a=> a*2))
// })








//  Word Count Chain
// Create a Promise that resolves with "I love learning JavaScript".
// First .then() → split into words.
// Second .then() → count number of words.
// Third .then() → log "Total words: X".



// let promise = new Promise(resolve=>{
//     resolve("I love learning javascript")
// })
// promise.then(word=>{
//     return word.split(" ")
// }).then(word=>{
//     console.log(word)
//     return word.length
// }).then(length=>{
//     console.log("Total words: "+length)
// })






// User Grades Evaluation
// Write a promise that resolves with a student’s scores:
// { name: "Sita", scores: [80, 60, 90, 100] }
// In the first .then, calculate the average score.
// In the second .then, decide the grade (A, B, C) based on the average.
// In the third .then, return a message "Sita has scored Grade A with avg 82.5".
// Add a .catch if the scores array is empty.



// let promise = new Promise((resolve,reject)=>{
//     let arr = { name: "Sita", scores: [80, 60, 90, 100] }
//     if((arr.scores).length===0) reject("The score array is empty")
//     else resolve(arr)
// })
// promise.then(obj=>{
//     let total = 0
//     for(i=0; i<(obj.scores).length; i++){
//         total = total + obj.scores[i]
//     } 
//     obj.avg = total/4
//     return obj
// }).then(obj=>{
//     if(obj.avg>90) obj.grade = "A"
//     else if(obj.avg>80) obj.grade = "B"
//     else if(obj.avg>70) obj.grade = "C"
//     return obj
// }).then(obj=>{
//     return "Sita has scored Grade "+obj.grade+" with avg "+obj.avg
// }).then(val=>{
//     console.log(val)
// }).catch(err=>{
//     console.log(err)
// })







// let promise = new Promise((resolve,reject)=>{
//     let arr = { name: "Sita", scores: [80,60,90,100] }
//     if((arr.scores).length===0) reject("The score array is empty")
//     else resolve(arr)
// })
// promise.then(obj=>{
//     let variable = (obj.scores).reduce((a,b)=>{
//         return (a+b)
//     })
//     obj.avg = variable/4
//     return obj
// }).then(obj=>{
//     obj.grade = obj.avg>90? "A":obj.avg>80? "B":obj.avg>70? "C":"D"
//     return obj
// }).then(obj=>{
//     return "Sita has scored Grade "+obj.grade+" with avg "+obj.avg
// }).then(val=>{
//     console.log(val)
// }).catch(err=>{
//     console.log(err)
// })









// let promise = new Promise(resolve=>{
//     let a = Math.floor((Math.random()*41)+10)
//     resolve(a)
// })
// promise.then(val1=>{
//     console.log(val1)
//     return val1*val1
// }).then(val2=>{
//     return Math.sqrt(val2)
// }).then(val3=>{console.log((val3.toString()).includes(2)? "Lucky Number":"Try Again")
// })