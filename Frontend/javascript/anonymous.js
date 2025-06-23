// function myFunc(a, b) {
//     return a + b
// }

// function nextFunction(n,m){
//     console.log(n+m)
// }

// nextFunction(myFunc(2,3),10)

  


// let myFunc = function(a,b){
//     return a*b
// }

// let a = Number(prompt("Enter first number: "))
// let b = Number(prompt("Enter second number: "))

// console.log("The product is "+myFunc(a,b))






// let func = function(a,b){
//     return a-b
// }

// function nextfunction(num){
//     if (num<0){
//         console.log("The number is negative")
//     }
//     else if(num>0){
//         console.log("The number is positive")
//     }
//     else{
//         console.log("The number is equal to zero")
//     }
// }

// let a = Number(prompt("Enter the first number: "))
// let b = Number(prompt("Enter the second number: "))

// nextfunction(func(a,b))





    // let func = function(a){
    //     return a*a
    // }

    // console.log("The square of 5 is "+func(5))



    


//     let func_add = function(a, b){
//     return a + b;
// }
// let func_sub = function(a, b){
//     return a - b;
// }
// let func_mul = function(a, b){
//     return a * b;
// }
// let func_div = function(a, b){
//     return a/b
// }
// function nextfunction(a, b, c) {
//     if (c=='+') {
//         console.log(`The sum of ${a} and ${b} is ${func_add(a, b)}`)
//     } 
//     else if (c=='-') {
//         console.log(`The difference between ${a} and ${b} is ${func_sub(a, b)}`)
//     } 
//     else if (c=='*') {
//         console.log(`The product of ${a} and ${b} is ${func_mul(a, b)}`)
//     } 
//     else if (c=='/') {
//         console.log(`The division of ${a} and ${b} is ${func_div(a, b)}`)
//     }
//     else {
//         console.log("The operator you enter is incorrect")
//     }
// }
// let a = Number(prompt("Enter the first number: "))
// let b = Number(prompt("Enter the second number: "))
// let c = prompt("Enter the operator (+, -, *, /): ")

// nextfunction(a,b,c)




// let func_add = function(a,b){
//     return a + b
// }
// let func_sub = function(a,b){
//     return a - b
// }
// let func_mul = function(a,b){
//     return a * b
// }
// let func_div = function(a,b){
//     return a/b
// }

// function nextfunction(a, b, c) {
//     if (c=="+"){
//         if(func_add(a,b)>0){
//             console.log(`The sum of ${a} and ${b} is ${func_add(a,b)}.`)
//             console.log("The sum is positive")
//         }
//         else if(func_add(a,b)<0){
//             console.log(`The sum of ${a} and ${b} is ${func_add(a,b)}.`)
//             console.log("The sum is negative")
//         }
//         else if(func_add(a,b)==0){
//             console.log("The sum of ${a} and ${b} is equal to zero")
//         }
//     } 
//     else if (c=="-"){
//        if(func_sub(a,b)>0){
//             console.log(`The difference of ${a} and ${b} is ${func_sub(a,b)}.`)
//             console.log("The difference is positive")
//         }
//         else if(func_sub(a,b)<0){
//             console.log(`The diffenence of ${a} and ${b} is ${func_sub(a,b)}.`)
//             console.log("The difference is negative")
//         }
//         else if(func_sub(a,b)==0){
//             console.log("The difference of ${a} and ${b} is equal to zero")
//         }
//     } 
//     else if (c=="*"){
//         if(func_mul(a,b)>0){
//             console.log(`The product of ${a} and ${b} is ${func_mul(a,b)}.`)
//             console.log("The product is positive")
//         }
//         else if(func_mul(a,b)<0){
//             console.log(`The product of ${a} and ${b} is ${func_mul(a,b)}.`)
//             console.log("The product is negative")
//         }
//         else if(func_mul(a,b)==0){
//             console.log("The product of ${a} and ${b} is equal to zero")
//         }
//     }
//     else if(c=="/"){
//         if(func_div(a,b)>0){
//             console.log(`The division of ${a} and ${b} is ${func_div(a,b).toFixed(2)}.`)
//             console.log("The division is positive")
//         }
//         else if(func_div(a,b)<0){
//             console.log(`The division of ${a} and ${b} is ${func_div(a,b).toFixed(2)}.`)
//             console.log("The division is negative")
//         }
//         else if(func_div(a,b)==0){
//             console.log("The division of ${a} and ${b} is equal to zero")
//         }
//     }
//     else{
//         console.log("The operator you enter is incorrect")
//     }
// }
// let a = Number(prompt("Enter the first number: "))
// let b = Number(prompt("Enter the second number: "))
// let c = prompt("Enter the operator (+, -, *, /): ")

// console.log(c)

// nextfunction(a,b,c)