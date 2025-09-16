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