function Hobbies(props) {
    return <>
        <ol type="a">
            <li>{props.SentData.hobbies[0]}</li>
            <li>{props.SentData.hobbies[1]}</li>
            <li>{props.SentData.hobbies[2]}</li>
        </ol>
    </>
}
export default Hobbies