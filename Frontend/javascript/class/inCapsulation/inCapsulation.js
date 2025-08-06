// class person{
//         constructor(name,age){
//             this.name = name
//             this.age = age
//         }
//         get age1(){
//             return this.age
//         }
// }
// let object = new person("Dhairya",15)
// console.log(object.age1)
// console.log(object.age)






//     class person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     get age1(){
//         return this.age
//     }
    
//     set age1(value){
//         if(value>0){
//             this.age = value
//         }
//         else{
//             console.log("Age is less than 0")
//         }
//     }
// }

// let obj = new person("Dhairya",15)
// console.log(obj.age1)

// obj.age1 = 20
// console.log(obj.age1)






// class book{
//     constructor(title,author,_rating){
//         this.title = title
//         this.author = author
//         this._rating = _rating
//     }
//     get rate(){
//         return this._rating
//     }
//     set rate(newRating){
//         if(newRating>=0 && newRating<=5){
//             this._rating = newRating
//         }
//         else{
//             console.log("Rating value should from 0 to 5")
//         }
//     }
// }

// let obj = new book("Biography","manche",3.5)
// console.log(obj.rate)

// obj.rate = -2
// console.log(obj.rate)





// create a temperature class ,stores  _celcius,_fahrenheit setter fahrenheit into celcius



// class Temperature{
//     constructor(celcius){
//         this._celcius = celcius //100
//         // 212

//     }
//     get convert(){
//         return (this._celcius * (9/5))+32 // into fahrenheit -- 212
//     }
//     set convert(value){ //100
//         let temp = (value - 32)*5/9 //212
//         console.log(temp)
//     }
// }
// let obj = new Temperature(100)
// console.log(obj.convert)
// obj.convert = 212



// create a user class with name and age the setter should not allow age less than 0 and more than 100,the getter should return user infomation


// class user{
//     constructor(_name,_age){
//         this._name = _name
//         this._age = _age
//     }
//     get age1(){
//         return this._age
//      }
//     set age1(newAge){
//         if(newAge<100 && newAge>0){
//             this._age = newAge
//         }
//         else{
//             console.log("The age should be less than 100 and more than 0")
//         }
//     }
// }

// let obj = new user("Dhairya",15)
// console.log(obj.age1)

// obj.age1 = -2
// console.log(obj.age1)






// create a bank class with owner name and balance setter should not allow negative value , the getter should return information


// class bank{
//     constructor(_name,_balance){
//         this._name = _name
//         this._balance = _balance
//     }
//     get balance1(){
//         return this._balance
//     }
//     set balance1(newBalance){
//         if(newBalance<100 && newBalance>0){
//             this._balance = newBalance
//         }
//         else{
//             console.log("The balance should not be negative")
//         }
//     }
// }

// let obj = new bank("Dhairya",10000000)
// console.log(obj.balance1)

// obj.balance1 = -2
// console.log(obj.balance1)







// create a class with username and password setter sets the password more than 6 and less than 12 , getter should return password is hidden


// class Class{
//     constructor(username,password){
//         this._username = username
//         this._password = password
//     }
//     get pass(){
//         return "password is hidden for privacy"
//     }
//     set pass(value){
//         console.log(value.length)
//         if(value.length<12 && value.length>6){
//             this._password = value
//         }else{
//             console.log("The password's length should be more than 6 and less than 12")
//         }
//     }
// }

// let obj = new Class("Dhairya","qwertyuiop")
// console.log(obj.pass)

// obj.pass = "nadsgfghnsdfnyanpa"
// console.log(obj.pass)