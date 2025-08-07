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