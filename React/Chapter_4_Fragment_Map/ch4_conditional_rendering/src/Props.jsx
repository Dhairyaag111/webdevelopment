// export default function Props(props){
//     return (
//         <ul>
//         <li className="list-group-item">{props.dhairya.name}</li>
//         <li className="list-group-item">{props.dhairya.age}</li>
//         <li className="list-group-item">{props.dhairya.obj2.hulu}</li>
//         <li className="list-group-item">{props.dhairya.obj2.hela}</li>
//         <li className="list-group-item">{props.dhairya.obj2.hala}</li>
//         <li className="list-group-item">{props.dhairya.obj2.hele}</li>
//         </ul>
//     )
// }



// export default function DisplayUserInfo(props) {
//     return (
//         <ul>
//             <li className="list-group-item">{props.dhairya.basic_info.personal.age}</li>
//             <li className="list-group-item">{props.dhairya.basic_info.education.faculty}</li>
//             <li className="list-group-item">{props.dhairya.basic_info.education.college.university}</li>
//             <li className="list-group-item">{props.dhairya.basic_info.education.college.location.district}</li>
//             <li className="list-group-item">{props.dhairya.address.history.stayed_places[0].duration.from}</li>
//             <li className="list-group-item">{props.dhairya.address.history.stayed_places[1].duration.to}</li>
//             <li className="list-group-item">{props.dhairya.address.current.temporary.postal_code}</li>
//             <li className="list-group-item">{props.dhairya.address.current.temporary.geo.lng}</li>
//             <li className="list-group-item">{props.dhairya.address.current.permanent.province}</li>
//             <li className="list-group-item">{props.dhairya.preferences.preferences.dishes.breakfast[1].name}</li>
//             <li className="list-group-item">{props.dhairya.preferences.preferences.dishes.dinner[2].calories}</li>
//             <li className="list-group-item">{props.dhairya.preferences.travel.favorite_places.countries[0].name}</li>
//             <li className="list-group-item">{props.dhairya.preferences.travel.favorite_places.dream_city.name}</li>

//             {/* <li className="list-group-item">{props.dhairya.preferences.travel.favorite_places.dream_city.reasons.snow}</li> */} {/*Use turnery operator
//             */}

//             <li className="list-group-item">{props.dhairya.activities.hobbies[1]}</li>
//             <li className="list-group-item">{props.dhairya.activities.sports.outdoor[0].position}</li>
//             <li className="list-group-item">{props.dhairya.system_meta.created_at}</li>
//         </ul>
//     )
// }


export default function DisplayAPI(props) {
    return (
        <ul>
            <li className="list-group-item">{props.dhairya.statusCode}</li>
            <li className="list-group-item">{props.dhairya.pagination.per_page}</li>
            <li className="list-group-item">{props.dhairya.data.user.id}</li>
            <li className="list-group-item">{props.dhairya.data.user.profile.personal.age}</li>
            <li className="list-group-item">{props.dhairya.data.user.profile.contact.email}</li>
            <li className="list-group-item">{props.dhairya.data.user.profile.contact.phones[0].number}</li>
            <li className="list-group-item">{props.dhairya.data.user.roles[1]}</li>
            <li className="list-group-item">{props.dhairya.data.academic.enrolled_courses[0].instructor.name}</li>
            <li className="list-group-item">{props.dhairya.data.academic.enrolled_courses[0].instructor.contact.email}</li>
            <li className="list-group-item">{props.dhairya.data.preferences.ui.accessibility.text_size}</li>
            <li className="list-group-item">{props.dhairya.data.preferences.notifications.push.schedule.quiet_hours.to}</li>
            <li className="list-group-item">{props.dhairya.data.preferences.notifications.push.schedule.timezone}</li>
            <li className="list-group-item">{props.dhairya.logs.last_login.device.type}</li>
            <li className="list-group-item">{props.dhairya.logs.last_login.device.os.version}</li>
            <li className="list-group-item">{props.dhairya.logs.activity_history[1].meta.duration_seconds}</li>
        </ul>
    )
}
