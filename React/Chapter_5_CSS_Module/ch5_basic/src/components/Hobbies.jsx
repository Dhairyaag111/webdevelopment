function Hobbies(props) {
    return <>
        <ol type="a">
            <li className="list one">{props.SentData.hobbies[0]}</li>
            <li className="list two">{props.SentData.hobbies[1]}</li>
            <li className="list three">{props.SentData.hobbies[2]}</li>
        </ol>
    </>
}
export default Hobbies