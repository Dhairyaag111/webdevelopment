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