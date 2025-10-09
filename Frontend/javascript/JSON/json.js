// Java Script Object Notation (Full Form)

// let json = {
//     name : "Dhairya",
//     surname : "Agrawal",
//     age : 10,
//     grade : 10,
//     address : "Birtamode",
//     isMarried : false,
//     food : {
//         fruits = ["apple","mango"]
//         vagetable = ["potato","onion"]
//     }
// }
//     console.log(json)




// when we have to change object into string we have to use "JSON.stingify(object)"
// when we have to change string into object we have to use "JSON.parse(string or string variable)"

// example::

// let data1 = '{"fruits":"apple","vegetable":"potato"}'
// console.log(data1)
// console.log(typeof(data1))
// let data2 = JSON.parse(data1)
// console.log(data2)
// console.log(typeof(data2))
// let data3 = JSON.stringify(data2)
// console.log(data3)
// console.log(typeof(data3))





// let Json=`[{
//     "name":"Sahil",
//     "lastName":"Agrwal",
//     "grade":10,
//     "favouriteNumber":[10,14,18,22],
//     "address":{
//         "country":"Nepal",
//         "city":"Birtamode"
//     }
//     },
//    {
//    "name": "Nayan Pathak",
//    "address" : "Birtamode"
//    },
//     {
//     "name": "Dhiarya Agrawal",
//     "address" : "India"
//     },
//     {
//     "name": "SahiL Agrawal",
//     "address" : "Illam"
//     },
//     {
//     "name": "Sita Thapa",
//     "address" : "Kathmandu"
//     }]`
// console.log(typeof(Json))
// let newJson=JSON.parse(Json)
// console.log(typeof(newJson))
// console.log(newJson)
// console.log(newJson[0].address)
// console.log(newJson[2].name)