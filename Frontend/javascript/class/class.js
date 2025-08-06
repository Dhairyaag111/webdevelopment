// class car{
//     constructor(brand,color,power,capacity,price){
//     this.brand = brand
//     this.color = color
//     this.power = power
//     this.capacity = capacity
//     this.price = price
//     }
//     properties(){
//         console.log(`The car brand is ${this.brand} nad it's color is ${this.color}. This car gives power of ${this.power} also ${this.capacity} can sit in this car.The price of car is Rs.${this.price}`)
//     }
// }
    
//     let obj1 = new car("BMW","White","30000 hp",5,10000000)
//     obj1.properties()
//     console.log("")
//    let obj2 = new car("MUSTANG","Red","123456 hp",3,1450000)
//     obj2.properties()
//     console.log("")
//     let obj3 = new car("AUDI","Blue","98765 hp",6,500000)
//     obj3.properties()






// class student{
//     constructor(name,percentage){
//         this.name = name
//         this.percentage = percentage
//     }
//      checker(){
//          if(this.percentage>40){
//              console.log(this.name+" is pass")
//          }
//          else{
//              console.log(this.name+" is fail")
//          }
//      }
// }
// let obj1 = new student("RAM",26)
// obj1.checker()
// console.log("")
// let obj2 = new student("SHYAM",54)
// obj2.checker()





// class student{
//     constructor(name,percentage){
//         this.name = name
//         this.percentage = percentage
//     }
//      checker(marks){
//          if(this.percentage>40){
//              console.log(this.name+" is pass and marks is "+sci)
//          }
//          else{
//              console.log(this.name+" is fail and marks is "+sci)
//          }
//      }
// }
// let obj1 = new student("RAM",26)
// obj1.checker(54)
// console.log("")
// let obj2 = new student("SHYAM",54)
// obj2.checker(26)






// class loginPage{
//     constructor(username,password){
//         this.username = username
//         this.password = password
//     }
//      checker(u,p){
//          if(this.username===u && this.password===p){
//              console.log("You are logined")
//          }
//          else{
//              console.log("You are not logined")
//          }
//      }
// }
// let obj1 = new loginPage("RAM","qwertyuiop")
// obj1.checker("SHYAM","qwertyuiop")
// console.log("")
// let obj2 = new loginPage("SHYAM","asdfghjkl")
// obj2.checker("SHYAM","qwertyuiop")
// console.log("")
// let obj3 = new loginPage("HARI","zxcvbnm")
// obj3.checker("HARI","zxcvbnm")





// to create a fan class with status property on(1) or off(0). Add methods turn on, turn off and get status


     // class fanClass{
     //     constructor(){
     //         this.state = "off"
     // }
     // turnOn(){
     //     this.state = "on"
     //     console.log("The fan is "+this.state)
     // }
     //     this.state = "off"
     //     console.log("The fan is "+this.state)
     // }
     // getStatus(){
     //     console.log("The fan is currently "+this.state)
     // }
     // }
     // let obj1 = new fanClass()
     // obj1.turnOff()
     // obj1.getStatus()
     // obj1.turnOn()
     // obj1.getStatus()
                    
                    
                    
                    

                    
    // to create a product class with name, price. Add a method apply 10% discount if the amount is more than 10000 

    // class product{
    //     constructor(name,price){
    //         this.name = name
    //         this.price = price
    //     }
    //      checker(){
        //          if(this.price>10000){
            //             let d = this.price*0.1
            //             console.log(this.name+" your discount amount is "+d+" and the final bill is of Rs"+(this.price-d))
            //          }
            //          else{
                //              console.log("No discount for you "+this.name)
                //          }
                //      }
                // }
                // let obj1 = new product("RAM",2000)
    // obj1.checker()
    // console.log("")
    // let obj2 = new product("HARI",16000)
    // obj2.checker()
    
    
    

    
    
    // to create a pessenger class with name and balance. There is a method buy ticket that reduces 50 rs from main balance,if the main balance is less than 50 don't sell ticket 
    
    // class passenger{
        //     constructor(name,balance){
//         this.name = name
//         this.balance = balance
//     }
//      checker(){
//          if(this.balance>=50){
//            let n = this.balance-50
//             console.log("The ticket is sold to you for Rs 50 and your balance is "+n)
//          }
//          else{
//              console.log("Insufficient balance")
//          }
//      }
// }
// let obj1 = new passenger("RAM",60)
// obj1.checker()
// console.log("")
// let obj2 = new passenger("HARI",49)
// obj2.checker()