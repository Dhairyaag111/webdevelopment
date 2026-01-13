export function Intro(props){
    return <>
        <p>Hello My name is {props.SentData.name}. I am studing in grade {props.SentData.grade}. I am from {props.SentData.address}. I am {props.SentData.age} years old.</p>
    </>
}