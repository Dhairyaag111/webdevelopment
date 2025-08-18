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