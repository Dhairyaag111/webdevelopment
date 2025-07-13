// let fruits = ["apple","mango","orange","banana","watermelon"]
// for(let i of fruits){
//     console.log(i)
// }






// .forEach 




// let num = [2,4,6,8]
// let num1 = []
// num.forEach(function(a){
//     num1.push(a*2)
// })
// console.log(num1)


    // let fruits = ["apple","mango","orange","banana","watermelon"]
    // fruits.forEach(function (x){
    //     console.log(x)
    // })


    // let fruits = ["apple","mango","orange","banana","watermelon"]
// fruits.forEach(x =>{
//     console.log(x)
// })


// let num = [2,4,6,8,10]
// num.forEach(function (a){
//     console.log(a*a)
// }
//     )


// let fruits = ["apple","mango","orange","banana","watermelon"]
// fruits.forEach(function(a,b){
//     console.log("The index is "+a)
//     console.log("The fruits is "+b)
// })


// let num = [343,23,53,64,12,64,324,644,75,49]
// let ecounter = 0
// let ocounter = 0
// num.forEach(function(a){
//     if(a%2==0){
//     ecounter++
// }
// else{
//     ocounter++
// }
// })
// console.log(`Even number = ${ecounter}`)
// console.log(`Odd number = ${ocounter}`)


// let fruits = ["apple","mango","orange","banana","watermelon", "avacodo"]
// let counter = 0
// fruits.forEach(function(a){
//     if(a[0]=='a'){
//         counter++
//     }
// })
// console.log(`The are ${counter} fruits that stats with "a"`)


// let fruits = ["apple","mango","orange","banana","watermelon"]
// let counter = 0
// fruits.forEach(function(a){
//     if(a.startsWith("a") || a.startsWith("A")){
//         counter++
//     }
// })
// console.log(`The are ${counter} fruits that stats with "a"`)


// let fruits = ["apple","mango","orange","banana","watermelon", "avacodo"]
// let counter = 0
// fruits.forEach(function(a){
// console.log(a[1])
// })


// let num = [1,20,43,45,70,3350,234,650]
// num.forEach(function(a){
//     if(a%10==0){
//         console.log(a)
//     }
// })



    // let num= [12,20,43,45,70,30,24,60]
    // let d =0
    // let sum = 0 
    // num.forEach(function(a){
    //  d = a%10
    //   a = a/10>>0
    //       sum = d + a
    //     console.log(sum)
    // })



//     let num = [12,24,43,45,71,38,24,60]
// let d =0
// let sum = 0
// num.forEach(function(a){
// d = a%10
// sum = sum + d
// })
// console.log(sum)









// .map



// let num = [2,4,6,8]
// let num2 = num.map(function(a){
//     return a*2
// })
// console.log(num2)


// let num = [1,2,3,4,5,6,7,8,9,10]
// let num1 = num.map(function(a){
//     return a+""
// })
// console.log(num1)


// let year = [2000,2021,2018,2024,2009]
// let age = year.map(function(a){
//     return 2025-a
// })
// console.log(age)


// let fruits = ["apple","mango","orange","banana","watermelon",]
// let first = fruits.map(function(a){
//     return a[0]
// })
// console.log(first)


//  let tf = ["true","false","false","false","true","true","false"]
//  let variable = tf.map(function(a){
//      if(a=="true"){
//          return "yes"
//      }
//      else if(a=="false"){
//          return "no"
//      }
//      else{
//          return "error"
//      }
//  })
//  console.log(variable)






// .reduce




// let num = [10,20,30,40,50]
// let variable = num.reduce(function(a,b){
//     return a+b
// })
// console.log(variable)



// let num = [120,34,76,46,890,75,100]
// let h = 0
// let variable = num.reduce(function(a,b){
//     if(a>b){
//         return h = a
//     }
//     else{
//     return b
//     }
//     })
// console.log(` the highest number is ${variable}`)





// .every


// let even = [2,4,6,8,10,12]
// let variable = even.every(function(a){
// return a%2==0
// })
// console.log(variable)


// let marks = [25,66,78,53,77,82,12,22]
// let variable = marks.every(function(a){
//     return a>40
// })
// console.log(variable)





// .some


// let num = [11,43,22,31]
// let variable = num.some(function(a){
//     return a%2==0
// })
// console.log(variable)




// .from


// let num = [11,43,22,31]
// let variable = Array.from(num,function(a){
// return a*a
// })
// console.log(variable)


// let fruits = "apple"
// let sum = 0
// let array = Array.from(fruits)
// console.log(array)


// let fruits = "apple"
// let sum = ''
// let array = Array.from(fruits)
// console.log(array)
// array.forEach(function(a){
//     sum = sum + a
// })
// console.log(sum)