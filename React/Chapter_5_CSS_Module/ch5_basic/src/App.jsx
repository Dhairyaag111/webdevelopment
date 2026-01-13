
import { Intro } from "./components/Intro"
import Button from "./components/button"
import Hobbies from "./components/Hobbies"
export default function App(){
  let PersonalInfo = {
    name:"Dhairya Agrawal",
    grade:10,
    address:"Birtamode, Jhapa",
    age:16,
    hobbies:["Reading","Studing","Playing"]
  }
  return <>
    <Intro SentData={PersonalInfo}></Intro>
    <Button SentData={PersonalInfo}></Button>
    <Hobbies SentData={PersonalInfo}></Hobbies>
  </>
}