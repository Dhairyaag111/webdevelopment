//  create a class animal with a method sound, create a class dog that inherits parent class and over writes parent method sound


// class Animal{
//     sound(){
//         console.log("All animals hears")
//     }
// }
// class dog extends Animal{
//     sound(){
//         console.log("Dog hears")
//     }
// }

// let dogObj = new dog()
// dogObj.sound()





//  show multi level inheritance



// class animal{
//     walk(){
//         console.log("All animals walks")
//     }
// }
// class lion extends animal{
//     eat(){
//         console.log("It is a carnivorous")
//     }
// }

// class tiger extends lion{
//     run(){
//         console.log("This animal runs fast")
//     }
// }
// class cheetah extends tiger{
//     height(){
//         console.log("It's height is about 32 inch")
//     }
// }

// let obj = new lion()
// obj.walk()
// let obj1 = new tiger()
// obj1.eat()
// let obj2 = new cheetah()
// obj2.run()
// let obj3 = new cheetah()
// obj3.height()






//  show hierarchial inheritance(create a parent class shape , create 3 child class    circle =, square, rectangle and calculate thieir area)


// let radius = 7
// let length  = 10
// let breadth = 5
// class shape{
// }
// class circle extends shape{
//     area(){
//         console.log("Area of circle is "+3.1415*radius*radius)
//     }
// }

// class square extends shape{
//     area(){
//         console.log("Area of square is "+length*length)
//     }
// }

// class rectangle extends shape{
//     area(){
//         console.log("Area of rectangle is "+length*breadth)
//     }
// }

// let obj = new circle()
// obj.area()
// let obj1 = new square()
// obj1.area()
// let obj2 = new rectangle()
// obj2.area()








// class animal{
//     constructor(name){
//         this.name = name
//     }
//     display1(){
//         console.log("The name is "+this.name)
//     }
// }
// class dog extends animal{
//     constructor(name,breed){
//         super(name)
//         this.name = name
//         this.breed = breed
//     }
//     displayDog(){
//         console.log("The name is "+this.name+" and the breed is "+this.breed)
//     }
// }
// class cat extends dog{
//     constructor(name,breed){
//         super(name)
//         this.name = name
//         this.breed = breed
//     }
//         displayCat(){
//         console.log("The name is "+this.name+" and the breed is "+this.breed)
//     }
// }
// let obj = new cat("abc","xyz")
// obj.display1()
// obj.displayDog()
// obj.displayCat()








// class A{
//     display(){
//         console.log("Hello")
//     }
// }

// class B extends A{
//      display1(){
//          super.display()
//          console.log("Hi")
//      }
// }

// let obj = new B()
// obj.display1()



// in heritance, in capsulation, Polymorphism, abstraction


// public

// console.log("public")

// class Bank{
//     constructor(){
//     this.balance = 1000
//     }
    
//     deposit(amt){
//         this.balance = this.balance + amt
//     }
    
//     withdraw(amt){
//         this.balance = this.balance - amt
//     }
    
//     total(){
//         console.log("The total amount is "+this.balance)
//     }
// }


// const obj = new Bank()
// obj.total()
// obj.deposit(1000)
// obj.total()
// obj.withdraw(1500)
// obj.total()
// console.log(obj.balance)




// private 


// console.log("Private")

// class Bank{
//     #balance = 1000
    
    
//     deposit(amt){
//         this.#balance =  this.balance + amt
//     }
    
//     withdraw(amt){
//         this.#balance = this.balance - amt
//     }
    
//     total(){
//         console.log("The total amount is "+this.#balance)
//     }
    
//     #show(){
//         console.log("It is private and unaccessible.")
// }
// }

// const obj = new Bank()
// obj.total()
// obj.deposit(1000)
// obj.total()
// obj.withdraw(1500)
// obj.total()
// console.log(obj.balance)
// obj.show()






// 1. Vehicle Inheritance
// Create a base class Vehicle with properties brand and year.
// Make two child classes Car and Bike that extend Vehicle.
// Add a method in each child to display its type.



// 2. Employee Hierarchy
// Create a class Employee with name and salary.
// Extend it into Manager that adds department.
// Extend again into SeniorManager that adds bonus.
// Write a method to calculate total salary (salary + bonus).



// 3. Shape Area (Polymorphism)
// Create a base class Shape with a method area().
// Create Circle and Rectangle classes extending it.
// Override area() method in each child.