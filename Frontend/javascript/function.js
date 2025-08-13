// function mulitplication(a){
//     for(i=1;i<=10;i++){
//         pro = a*i
//         console.log(a+" X "+i+" = "+pro)
//     }
// }

// let a = Number(prompt("Enter any number to know its table: "))
// mulitplication(a)





// function square(a){
//     sq = a*a
//     console.log("The square of "+a+" is "+sq)
// }

// function cube(a){
//     cub = a*a*a
//     return cub
// } 

// let a = Number(prompt("Enter the number to know its square and cube: "))

// square(a)
// let result = cube(a)
// console.log("The cube of "+a+" is "+cub)





// function sum(a,b){
//     s = a+b
//     return s
// }

// function diff(a,b){
//     d = a-b
//     return d
// }

// function pro(a,b){
//     p = a*b
//     return p
// }

// function div(a,b){
//     di = a/b
//     return di
// }
// let a = Number(prompt("Enter the first number: "))
// let b = Number(prompt("Enter the second number: "))

// let res_sum = sum(a,b)
// console.log("The sum of "+a+" and "+b+" is "+s+".")

// let res_diff = diff(a,b)
// console.log("The differece of "+a+" and "+b+" is "+d+".")

// let res_pro = pro(a,b)
// console.log("The product of "+a+" and "+b+" is "+p+".")

// let res_div = div(a,b)
// console.log("The division of "+a+" and "+b+" is "+di.toFixed(2)+".")





// function num(n) {
// if (n % 2 == 0) {
// console.log("the number is even.");
// } else {
// console.log("the number is odd.");
// }
// }

// let a = Number(prompt("Enter any number: "))
// num(a)





// function grade(a){
//     if(a>90 && a<=100){
//         console.log(`The grade you got by ${a}% is A+`)
//     }
//     else if(a>80 && a<=90){
//         console.log(`The grade you got by ${a}% is A`)
//     }
//         else if(a>70 && a<=80){
//         console.log(`The grade you got by ${a}% is B+`)
//     }
//         else if(a>60 && a<=70){
//         console.log(`The grade you got by ${a}% is B`)
//     }
//         else if(a>50 && a<=60){
//         console.log(`The grade you got by ${a}% is C+`)
//     }
//     else if(a>=40 && a<=50){
//           console.log(`The grade you got by ${a}% is C`)
//     }
//     else if(a<40){
//     console.log("You are fail.")
// }
// else{
//     console.log("The percentage you entered is incorrect.")
// }
// }

// let a = Number(prompt("Enter the percentage of marks in your exam: "))
// grade(a)





// function simpleinterest(p,t,r){
//     si = (p*t*r)/100
//     return si
// }
 
// let p = Number(prompt("Enter the principle amount: "))
// let t = Number(prompt("Enter the time: "))
// let r = Number(prompt("Enter the rate: "))
// console.log(`The simple interest of Rs${p}, in time ${t}yrs and with rate of ${r}% is Rs${simpleinterest(p,t,r)}.`)





// let area = function ar(aoc){
//     area_of_circle = pi*r*r
//     return area_of_circle
// }

// let circumference = function cu(coc){
//     circumference_of_circle = 2*pi*r
//     return circumference_of_circle
// }

// const pi = 3.1415
// let d = Number(prompt("Enter the diameter of the circle(in cm): "))
// let r = d/2

// let res_ar = area(d)
// console.log(`The area of circle with the diameter ${d}cm is ${area_of_circle.toFixed(2)} `)

// let res_cu = circumference(d)
// console.log(`The circumference of circle with the diameter ${d}cm is ${circumference_of_circle.toFixed(2)} `)





// let primeNum = function pr(a){
//     for(i=1;i<=a;i++){
//         if(a%i==0){
//               counter++
// }
// }
// }

// let counter=0
// let a = Number(prompt("Enter the number to check whether is prime or not: "))
// primeNum(a)

// if(counter==2){
//     console.log("The number is a prime number.")
// }
// else{
//     console.log("The number is not a prime number")
// }







//     let c = Math.floor(Math.random()*100)
//     let userInput = 0
// function guesser(){
//    userInput = Number(prompt("Enter a number to guess: "))
// }
// function guesser1(){
//     let desire = true
//     while(desire)
//         if(userInput===c){
//         console.log("Yes you guessed. The number is "+c)
//         desire = false
//     }
//     else if(userInput<c){
//         console.log("Too low")
//         guesser()
//     }
//     else if (userInput>c){
//         console.log("Too high")
//         guesser()
//     }
// }
// guesser()
// guesser1()









// let q = ""
// let score = 0
// let userInput = ""
// let ran = 0

// function quiz() {
//     userInput = prompt("Enter how many quiz question you want to play(min:5, max:20): ")
//     let arrayQ = [
//         "▪️Which is is smallest country in the world?",
//         "▪️What is the capital city of Australia?",
//         "▪️How many colors are there in a rainbow?",
//         "▪️What is the fastest land animal in the world?",
//         "▪️In which ocean is the Bermuda Triangle located?",
//         "▪️Which animal is known as the 'King of the Jungle'?",
//         "▪️What is the national sport of Japan?",
//         "▪️In computing, what does 'HTTP' stand for?",
//         "▪️I am an odd number. Remove one letter and I become even. What am I?",
//         "▪️What is the chemical symbol for gold?",
//         "▪️Which gas do humans exhale the most?",
//         "▪️Who wrote the famous play Romeo and Juliet?",
//         "▪️Which planet is known as the 'Red Planet'?",
//         "▪️Which country invented paper?",
//         "▪️Who invented the telephone?",
//         "▪️Which continent is known as the 'Dark Continent'?",
//         "▪️Which part of the cell contains genetic material?",
//         "▪️How many sides does a hexagon have?",
//         "▪️Which festival is known as the Festival of Lights in India?",
//         "▪️Which bird can mimic human speech?"
//     ]
//     let arrayA = [
//         "Vatican City",
//         "Canberra",
//         "Seven",
//         "Cheetah",
//         "Atlantic Ocean",
//         "Lion",
//         "Sumo wrestling",
//         "HyperText Transfer Protocol",
//         "Seven",
//         "Au",
//         "Carbon dioxide",
//         "William Shakespeare",
//         "Mars",
//         "China",
//         "Alexander Graham Bell",
//         "Africa",
//         "Nucleus",
//         "Six",
//         "Diwali",
//         "Parrot"
//     ]

//     if (userInput >= 5 && userInput <= 20) {
//         for (i = 0; i < userInput; i++) {
//             ran = Math.floor(Math.random() * 20)
//             q = prompt(arrayQ[ran] + ": ")
//             let n = q.toUpperCase()
//             let n1 = (arrayA[ran]).toUpperCase()

//             if (n === n1) {
//                 console.log("correct answer")
//                 score++
//             } else {
//                 console.log("Wrong answer")
//                 console.log("The correct answer is " + arrayA[ran])
//             }
//         }
//         console.log("Your total score is " + score)
//     } else {
//         console.log("The input should be between 5 and 20")
//     }
// }
// quiz()







// let deposit, withDrawl, balance = 0
// let desire = true
// console.log("Welcome to our new bank")
// function bank() {
//     deposit = Number(prompt("Enter amount you want to deposit: "))
//     balance = balance + deposit
//     console.log("Your balance is " + balance)
// }
// function money() {
//     while (desire) {
//         let check = prompt("Enter 'Y' if you want to deposit more money, Enter 'N' if you want to withdraw money else enter 'no': ")
//         if ((check.toUpperCase()) === "Y") {
//             console.log("")
//            bank()
//            console.log("")
//         }
//         else if ((check.toUpperCase()) === "N") {
//        withDrawl = Number(prompt("Enter amount you want to withdraw: "))
//             if (withDrawl > balance) {
//                 console.log("")
//                 console.log("Insufficient amount of fund in your bank")
//                 console.log("")
//             } 
//             else {
//                 balance = balance - withDrawl
//                 console.log("")
//                 console.log("Your new balance " + balance)
//                 console.log("")
//         }
//     }
//         else if ((check.toUpperCase()) === "NO"){
//             console.log("Visit again")
//             desire = false
//         }
// }
// }
// bank()
// money()