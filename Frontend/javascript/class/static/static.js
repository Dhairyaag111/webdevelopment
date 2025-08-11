// // static


// class Calculate{
//     static cube(a){
//         return a*a*a
//     }
// }
// console.log(Calculate.cube(5))

// // static method is used for accessing any values without creating object.


// class Calculate{
//     static value = 2
//     static cube(a){
//         return a*a*a
//     }
// }
// console.log(Calculate.value)





// class Counter{
//     static value = 0
//     constructor(name){
//         this.name = name
//         Counter.value ++
//     }
    
//     static getTotal(){
//         console.log("The number of object is: "+Counter.value)
//     }
// }

// let obj1 = new Counter("shyam")
// let obj2 = new Counter("ram")
// Counter.getTotal()





// 1.Static method to validate phone number length
// Rule: If phone number length is not 10, return "Invalid"



// class phoneNumber{
//     static getNumber(number){
//         if(number.length === 10){ 
//             return "Valid phone number"
//         }
//         else{
//         return "Invalid Phone number."
//         }
//     }
// }

// console.log(phoneNumber.getNumber("1236142124"))
// console.log(phoneNumber.getNumber("123614212"))






// 2. Static login checker without creating user
// Task:
// Create a class with a static method that takes username and password and returns success/fail.


// class login{
//     static checker(username,pass){
//         if(username==="admin" && pass===1234){
//             return "Login Successfull"
//         }
//         else{
//             return "Login failed."
//         }
//     }
// }

// console.log(login.checker("Dhairya","qwertyuiop"))
// console.log(login.checker("admin",1234))




// 3. Static method to capitalize the first letter of a string

// class Upper{
//     static upperCase(str){
//         return str[0].toUpperCase() + str.slice(1)
//     }
// }
// console.log(Upper.upperCase("nayan"))





// 4. Generate Random 6-digit OTP using static



// class random{
//     static otp(){
//     return  (Math.floor(Math.random()*1000000))
//     }
// }

// console.log(random.otp())





// class Checker{
//     static guesser(password){
//         switch (password){
//             case "Dhairya1":
//                 console.log("Yes I have guessed it")
//                 break
//             case "nayan1":
//                 console.log("Yes i guessed it.")
//                 break
//             default:
//                 console.log("Sorry i was unable to guess your password. Good job your password is strong.")
//         }
//     }
// }

// Checker.guesser("nayan")









// class game{
//     static play(u){
//         let c = Math.floor(Math.random()*4)
//         let a = ""
//         if(c===1){
//          a = "scissors"
//         }
//         else if(c===2){
//            a = "rock"
//         }
//         else{
//             a = "paper"
//         }
//         if(u==="rock" && a==="rock"){
//             console.log("Computer chosed rock")
//             console.log("Its draw")
//         }
//         else if(u==="rock" && a==="scissors"){
//             console.log("Computer chosed scissors")
//             console.log("You won")
//         }
//         else if(u==="rock" && a==="paper"){
//             console.log("Computer chosed paper")
//             console.log("You lost")
//         }
//          else if(u==="paper" && a==="scissors"){
//              console.log("Computer chosed scissors")
//             console.log("You lost")
//         }
//         else if(u==="paper" && a==="rock"){
//             console.log("Computer chosed rock")
//             console.log("You won")
//         }
//         else if(u==="paper" && a==="paper"){
//             console.log("Computer chosed paper")
//             console.log("Its draw")
//         }
//         else if(u==="scissors" && a==="scissors"){
//             console.log("Computer chosed scissors")
//             console.log("Its draw")
//         }
//         else if(u==="scissors" && a==="paper"){
//             console.log("Computer chosed paper")
//             console.log("You won")
//         }
//         else if(u==="scissors" && a==="rock"){
//             console.log("Computer chosed rock")
//             console.log("You lost")
//         }
//         else{
//             console.log("Your input is wrong. Please enter correct input.")
//         }
        
//     }
// }
// game.play(prompt("Enter rock, paper or scissors to play: "))







// let user = prompt("Enter 'Y' if you want to add money in bank else enter 'N': ")
// let add = 0
// let balance = 0
// let c = user.toUpperCase()
// class bankAcc{
//     static balance(c){
//         if(c==="Y"){
//   add = Number(prompt("Enter amount you want to add: "))       
//   balance = balance + add
//         }
//         else if(c==="N"){
//             console.log("Bye Bye.")
//         }
//         else{
//         console.log("Your input is wrong")
//         }
//     }
// }
// bankAcc.balance(c)
// console.log("Your bank balance is "+balance)










// let counterU = 0
// let counterC = 0
// class game{
//     static play(){
//         function playRPS(){
//         let u = prompt("Enter rock, paper or scissor to play: ")
//             let c = Math.floor(Math.random()*3)
//         let a = ""
//         if(c===1){
//          a = "scissor"
//         }
//         else if(c===2){
//         a = "rock"
//         }
//         else{
//         a = "paper"
//         }
//         console.log("Computer chosed "+a)
//         if(u===a){
//             console.log("Its draw")
//         }
//         else if(u==="rock" && a==="scissor"){
//             console.log("You won")
//             counterU ++
//         }
//         else if(u==="rock" && a==="paper"){
//             console.log("You lost")
//             counterC ++
//         }
//          else if(u==="paper" && a==="scissor"){
//             console.log("You lost")
//             counterC ++
//         }
//         else if(u==="paper" && a==="rock"){
//             console.log("You won")
//             counterU ++
//         }
//         else if(u==="scissor" && a==="paper"){
//             console.log("You won")
//             counterU ++
//         }
//         else if(u==="scissor" && a==="rock"){
//             console.log("You lost")
//             counterC ++
//         }
//         else{
//             console.log("Your input is wrong. Please enter correct input.")
//         }
//         console.log("Your score is "+counterU)
//         console.log("Computer score is "+counterC)
//         }
//         function final(){
//      let desire = true
//         while(desire){ 
//             let use = prompt("Enter 'Y' if you want to play rock paper scissor else enter 'N': ")
//      let user = use.toUpperCase()
//             if(user==='Y'){
//                 playRPS()
//                 console.log("")
//             }
//             if(user==='N'){
//                 console.log("Thank you play again")
//                 desire = false
//                 break
                
//             }
//         }
//     }
//         function finalPlay(){
//     playRPS()
//     final()
//     }
//         finalPlay()
// }
// }
// game.play()