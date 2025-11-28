// Create an array of number. Add 4 at the begining and 7 at the end of an array.

// let arr1 = [5,6]
// arr1.unshift(4)
// arr1.push(7)
// console.log(arr1)




// Create a method to return an element at a particular position in the array.

// let user = Number(prompt("Enter the position whise data you want to delete: "))
// let arr1 = [1,2,3,4,5,6,7,8,9,10]
// let func = function(){
//     console.log(arr1[user])
// }
// func()




// Create an array copy using slice method

// let arr1 = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = arr1.slice(0,10)
// console.log(arr2)




// Create a for loop that prints sum of 4 digit numbers

// let a = Number(prompt('Enter how many sum you want: '))
// for(i=1;i<=a;i++){
//     let user = Number(prompt("Enter 4 digit number:- "))
//     let fourth = user%10
//     let third = ((user/10)>>0)%10
//     let second = ((user/100)>>0)%10
//     let first = ((user/1000)>>0)%10
//     console.log(first+second+third+fourth)
// }




// Create a loop that prints number 1 to 100 in reverse order.

// for(i=100;i>0;i--){
//     console.log(i)
// }




// Using continue only print the numbers divisible by both 3 and 9

// for(i=100;i>0;i--){
//     if(i%3!==0 && i%9!==0){
//         continue
//     }
//     console.log(i)
// }




// Ask for multiple words form the user , add it inside an array and concatinate all the words into a single sentence from the array

// let a = prompt("Enter the number of words you want in setence: ")
// let arr = []
// let arr2 = []
// let sum = ""
// for(i=1;i<=a;i++){
//     let user = prompt("Enter word: ")
//     arr.push(user)
// }
// for(i=0;i<arr.length;i++){
//     sum = sum+" "+arr[i]
// }
// console.log(sum+".")