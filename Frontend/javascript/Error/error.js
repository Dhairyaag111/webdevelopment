//  handling real world errors in java script or any other programming languages is known as error handling.

// In java script we use try, catch, finally, throw to handle all types of error

// Example:- We are building a payment system , user enters a card number. If the number is invalid our app might crash so, at that time we will catch errors, show a message, and continue running the app.

// So, this is what error handling is made for.

// Try - This is the bloch where we try to run some code

// Catch - This is the block where errors are cut

// Finally - This is the optinal block that runs whatever happens

// Throw - This is the block where we create our manual errors and throw it








// let userInput = Number(prompt("Enter a number: "))
// try{
//     let result = user/0
// }
// catch(error){
//     console.log(error.message)
// }
// finally{
//     console.log("It will show in any situation")
// }




// user = prompt("Enter any number : ")
// try{
//     let conv = parseInt(user)
//     if(isNaN(conv)){
//         conv.toFixed(120)
//     }
//     else{
//         console.log("You have entered : "+conv)
//     }
// }catch(error){
//     console.log("Please enter a valid integer number.")
// }



// user = prompt("Enter your name : ")
// try{
//     if( user==="null" || user==="undefined" || user==="NaN" || user===""){
//         user.toFixed()
//     }
//     else{
//         console.log("You entered your name : "+user)
//     }
// }
// catch(error){
//     console.log("Please enter a proper name string ")
// }




// let array = ["ram","shyam","sita","gita","hari"]
// let u = prompt("Enter a name: ")
//       try{
//           if(array.includes(u)){
//         console.log("you are registered already")
//     }
//     else{
//         array.toFixed()
//     }}
// catch(error){
//     console.log("You are not registered")
// }




// let u = Number(prompt("Enter your age: "))
// try{
//     if(u<18){
//         throw "You are not eligible for vote"
//     }
//     else{
//         console.log("You are eligible for vote")
//     }
// }catch(e){
//     console.log(e)
// }




// let userInput = prompt("Enter your name: ")
// try{
//     if(userInput===""){
//         throw "Your name can't be empty"
//     }
//     else{
//         console.log("Your name is : "+userInput)
//     }
// }catch(error){
//     console.log(error)
// }




// let array = [1,5,435,23,53,12,56,"hello",45,2,53,12,75]
// for(i=0;i<array.length;i++){
//     try{
//         if(isNaN(array[i])){
//             throw array[i]+" is not a number it is a string"
//         }
//         else{
//             console.log(array[i])
//         }
//     }catch(error){
//         console.log(error)
//     }
// }




// let a = Number(prompt("Enter first number: "))
// let b = Number(prompt("Enter second number: "))
// let func = (a,b) =>{
//     try{
//         if(isNaN(a) || isNaN(b) || b===0){
//         throw "Please enter a number not a string and enter second number 0"
//     }
//     else{
//         console.log("You entered "+a+" and "+b)
//     }}catch(error){
//         console.log(error)
//     }
// }
// func(a,b)





// let object = {
//     name: prompt("Enter your name: "),
//     email: prompt("Enter your email: "),
//     age: Number(prompt("Enter your age: "))
// }
// try{
// if(object.name==="" || object.email===""){
//     throw "Your name and email should not be empty"
// }
// else{
//     console.log("Your name is "+object.name+" and your email is "+object.email)
// }

// if(object.age<18){
//     console.log( "You age should must be more than 18" )
// }
// else{
//     console.log("Your age is "+object.age)
// }
// }catch(error){
//     console.log(error)
// }






// let array = ["notes.txt","photo.jpg","document.pdf","malware.exe","student.txt","library,txt"]
// try{
//     for(let i = 0; i<array.length; i++){
//         if(array[i].includes(".exe")){
//             throw `${array[i]} is a malware  in your device.`
//     }
//     }
// }catch(error){
//     console.log(error)
// }








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