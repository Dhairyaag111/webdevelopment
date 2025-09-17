// Syncronous is the default in java script. 
// Our code runs line by line one after the other. 
// If one line is taking time rest waits.
// So, this is the syncronous code behavior is java script.


// In asynchronous way our code dose not waits for slower tasks like API calls, timers, file reading.
// It transfers those tasks and continue with the rest of the code.
// Once the task is done it notifies back using call backs, promises or Async/Await.






// console.log("Print1")
// setTimeout(()=>{
//     console.log("Printing after 4 seconds.Print2")
// },4000)

// console.log("Print3")






//     let counter = 0
// let variable = setInterval(()=>{
//     console.log(counter)
//     counter = counter + 2
//     if(counter===20){
//         clearInterval(variable)
//     }
// },500)





// let main = function(number,func){
//     setTimeout(()=>{
//     console.log(func(number))
//     },1000)
    
//    let a =  setInterval(()=>{
//     console.log(number)
//     number++
//     if(number>=21){
//         clearInterval(a)
//     }
// }, 1200)
// }
// let second = function(number){
//     return "The number you entered is "+number
// }

// let number = Number(prompt("Enter number to know  number sequently up to 20: "))
// main(number,second)









// let first = function(){
//     let date  = new Date
//     console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
// }

// setInterval(first,1000)






    // let number = Number(prompt("Enter a number: "))
    // let num = 0
    // let first = setInterval(()=>{
    //     console.log(num)
    //     num++
    //     if(num===number){
    //         console.log("Boom💥")
    //         clearInterval(first)
    //     }
    // },1000)





//     let number = Number(prompt("Enter a number: "))
// let num = 0
// let first = setInterval(()=>{
//     console.log(number)
//     number--
//     if(num===number){
//         console.log("Boom💥")
//         clearInterval(first)
//     }
// },1000)






// let number = 0
// let first = setInterval(()=>{
//     console.log("Still waiting "+number)
//     number++
//     if(number===10){
//         console.log("Task completed.")
//         clearInterval(first)
//     }
// },1000)







// let first = setInterval(()=>{
//     console.log("Still waiting ....")
// },1000)

// let second = setTimeout(()=>{
//     console.log("Task Completed")
//         clearInterval(first)
// },10000)







// let word = "true"
// let first = setInterval(()=>{
// console.log(word? "ON":"OFF")
// word = !word
// },1000)
                                 
// setTimeout(()=>{
//     console.log("Stopped blinking.")
//     clearInterval(first)
// },10000)