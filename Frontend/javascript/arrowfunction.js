// let func = (a,b) =>{
//     console.log(a+b)
// }

// func(5,2)





// let func = =>{
//     console.log(a+b)
// }

// func(5)





//     let func = (r)=>{
//     return pi*r*r
// }

// const pi = 3.1415
// let r = Number(prompt("Enter the radius of the circle(in cm): "))
// console.log("The are of circle is "+func(r).toFixed(1)+" sq. cm")





// let func = (v,u,t) =>{
//     return (v-u)/t
// }

// let v = Number(prompt("Ener the final velocity: "))
// let u = Number(prompt("Ener the initial velocity: "))
// let t = Number(prompt("Ener the time: "))

// console.log(`The acceleration is ${func(v,u,t)}m/s.sq`)





// let func = (a) =>{
//     if(a%5==0 && a%11==0){
//         console.log("The number is divisible by both 5 and 11.")
//     }
//     else{
//         console.log("The number is not divisible by both 5 and 11.")
//     }
// }

// let a = Number(prompt("Enter any number: "))

// func(a)





// let func = (u,t,a) =>{
//     return (u*t)+1/2*a*t*t
// }

// let u = Number(prompt("Enter the initial velocity: "))
// let t = Number(prompt("Enter the time: "))
// let a = Number(prompt("Enter the accleration: "))

// console.log(`The distance is ${func(u,t,a)}m`)





// let func = (d,t) =>{
//     return d/t
// }
 
//  function speed(d,t){
//      if(func(d,t)<30){
//          console.log(`The speed is ${func(d,t).toFixed(2)}m/s`)
//      }
//      else{
//          console.log(" ")
//      }
//  }
 
//  let d = Number(prompt("Enter the distance: "))
//  let t = Number(prompt("Enter the time taken: "))
 
//  speed(d,t)





// let func = (l,b,h) =>{
//     return l*b*h
// }

// let l = Number(prompt("Ener the length of cuboid: "))
// let b = Number(prompt("Ener the breadth of cuboid: "))
// let h = Number(prompt("Ener the height of cuboid: "))

// console.log(`The volume of cuboid is ${func(l,b,h)}cube.m`)





// let func = (c) =>{
//    return (c*9/5)+32
// }

// let c = Number(prompt("Enter the celcius amount to be converted into fahrenhiet: "))

// console.log(`The fahrenhiet amount is ${func(c)}deg`)





// let func = (f) =>{
//    return (f-32)*5/9
// }

// let f = Number(prompt("Enter the fahrenheit amount to be converted into celcius: "))

// console.log(`The celcius amount is ${func(f)}deg`)





// let func = (a) =>{
//     return a
// }

// function oddevencheck(a){
//     if(a%2==1){
//         console.log(`${a} is a odd number`)
//     }
//     else{7
//         console.log(`${a} is a even number`)
//     }
// }

// let a = Number(prompt("Enter a number to check it is odd or even: "))

// oddevencheck(a)





// let func = (a)=> {
//     return a
// }

// function posnegzero(a){
//     if(a>0){
//         console.log(`${a} is a postive value`)
//     }
//     else if(a<0){
//         console.log(`${a} is a negative value`)
//     }
//     else{
//         console.log(`The number you entered is zero`)
//     }
// }

// let a = Number(prompt("Enter a number to check it is positive, negative or zero: "))

// posnegzero(a)






// let arrow=(a) =>{
//     counter=0
//     for(let i=1;i<=a;i++){
//         if(a%i==0){
//             counter++
//     }
//     }
//     if(counter==2){
//         console.log(`It is a prime number.`)
//     }
//     else{
//         console.log("It's not a prime number")
//     }
// }
// let a = Number(prompt(`Enter any number to check weatheer the given number is prime or not :- `))
// arrow(a)





// let arrow = (a) =>{
//      if(a>100 || a<2){
//     console.log("Enter the number between 2 and 100")
//       }
      
//     for (let i = 1; i <= a; i++){
//         if (a%i==0){
//             counter++
//         }
//     }
    
//     if (counter == 2){
//         console.log("It is a prime number.")
//     } 
//     else {
//         console.log("It's not a prime number.")
//     }
// }
// let counter = 0
// let a = Number(prompt("Enter any number to check whether the given number is prime or not (between 2 and 100):"))

// arrow(a)