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



// class vehicle{
//     constructor(brand,year){
//         this.brand = brand
//         this.year = year
//     }
//     displayVehicle(){
//         console.log("The brand is "+this.brand+" and year is "+this.year)
//     }
// }

// class car extends vehicle{
//       constructor(brand,year){    
//     super(brand,year)
//     this.brand = brand
//     this.year = year
// }
//     displayCar(){
//         console.log("The brand of car is "+this.brand+" and year is "+this.year)
//     }
// }

// class bike extends vehicle{
//       constructor(brand,year){    
//     super(brand,year)
//     this.brand = brand
//     this.year = year
// }
//     displayBike(){
//         console.log("The brand of bike is "+this.brand+" and year is "+this.year)
//     }
// }

// let obj = new  bike("bmw","2002")
// let obj1 = new  car("bmw","2002")
// obj.displayVehicle()
// obj.displayBike()
// obj1.displayVehicle()
// obj1.displayCar()







// 2. Employee Hierarchy
// Create a class Employee with name and salary.
// Extend it into Manager that adds department.
// Extend again into SeniorManager that adds bonus.
// Write a method to calculate total salary (salary + bonus).



//     class employee{
//     constructor(name,salary){
//         this.name = name
//         this.salary = salary
//     }
//     display1(){
//         console.log("The name of employee is "+this.name+" and his monthly salary is "+this.salary)
//     }
// }

// class manager extends employee{
//     constructor(name,department){
//         super(name)
//         this.name = name
//         this.department = department
//     }
//     displayDepartment(){
//         console.log(this.name+" works as a "+this.department)
//     }
// }
// class SeniorManager extends employee{
//     constructor(name,salary,bonus){
//         super(name,salary)
//         this.name = name
//         this.salary = salary
//         this.bonus = bonus
//     }
//     displayTotal(){
//         console.log(this.name+"'s tota; salary with bonus is "+this.salary+this.bonus)
//     }
// }

// let obj = new manager("ram","manager")
// obj.displayDepartment()

// let obj1 = new SeniorManager("ram",30000,5000)
// obj1.displayTotal()


// let obj2 = new employee("ram",30000)
// obj2.display1()







// 3. Shape Area (Polymorphism)
// Create a base class Shape with a method area().
// Create Circle and Rectangle classes extending it.
// Override area() method in each child.




// class shape{
//     constructor(radius,length1,breadth){
//         this.radius = radius
//         this.length1 = length1
//         this.breadth = breadth
//     }
//     area(){
//         console.log("The area fo circle is "+3.1415*this.radius*this.radius)
//         console.log("The area of rectangle is "+this.length1*this.breadth)
//     }
// }
// class circle extends shape{
//     constructor(radius){
//         super(radius)
//         this.radius = radius
//     }
//     area(){
//         console.log("The area of circle is "+3.1415*this.radius*this.radius)
//         }
// }
// class rectangle extends shape{
//     constructor(length1,breadth){
//         super(length1,breadth)
//         this.length1 = length1
//         this.breadth = breadth
//     }
//     area(){
//         console.log("The area of rectangle is "+this.length1*this.breadth)
//     }
// }

// let obj = new circle(7)
// let obj1 = new rectangle(10,5)
// let obj2 = new shape(7,10,5)
// obj.area()
// console.log("")
// obj1.area()
// console.log("")
// obj2.area()