const prompt = require("prompt-sync")()
let currency = prompt("Enter the currency name: ")
let d = prompt("Enter date (example : 2023-11-19): ")
fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@"+d+"/v1/currencies/"+currency+".json")
.then(a=>{
    return a.json()
}).then(b=>{
    console.log(b)
})