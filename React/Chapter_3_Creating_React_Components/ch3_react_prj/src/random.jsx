// export function RandomNumber() {
//     let random = Math.floor(Math.random() * 101)
//     return <button>The random number is {random}</button>
// }

export function Otp(){
     
    return <p>Your OTP is: {Math.random()*10>>0}{" "}{Math.random()*10>>0}{" "}{Math.random()*10>>0}{" "}{Math.random()*10>>0}{" "}{Math.random()*10>>0}{" "}{Math.random()*10>>0}</p>
}

