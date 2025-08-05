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