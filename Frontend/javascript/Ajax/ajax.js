// Asynchronous Javascript And Xml (full form).
// Its is used to update data without refreshing.




fetch("https://6900b732ff8792314bb1b8a.mockapi.io/test")
.then(a=>{
    return a.json()
}).then(b=>{
    console.log(b)
}).catch(c=>{
    console.log("some api keys are missing")
})
