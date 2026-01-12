// export default function App() {
//     let arr = ["apple", "mango", "orange", "pineapple", "guava"]
// arr = []

// if (arr.length === 0) {
//     return <>
//         <h3>Sorry no fruits</h3>
//     </>
// }

// let variable = (arr.length === 0) ? <h3>Sorry no fruits</h3> : null

// let variable = ((arr.length===0) && <><h3>Sorry no fruits</h3></>)
//     return (
//         <>
//             {/* {variable} */}
//             <ul class="list-group">
//                 {arr.map(fruits => (
//                     <li key={fruits} className="list-group-item">{fruits}</li>
//                 ))}
//             </ul>
//         </>
//     )

// }





// import Props from "./Props"
// export default function App() {
//     // let arr = ["apple", "mango", "orange", "pineapple", "guava"]
//     let obj = {
//         name: "Dhairya Agrawal",
//         grade: 10,
//         roll_no: 12,
//         age: 16,
//         address:"Nepal",
//         obj2:{
//             hulu:"Sahil Agrawal",
//             hala:15,
//             hela:10,
//             hele:"boy"
//         },
//         arr: ["Apple","mango","orange"]
//     }
//     return (
//         <>
//             <ul class="list-group">
//                 {/* {arr.map(fruits => (
//                     <li key={fruits} className="list-group-item" dhairya={obj}></li>
//                 ))} */}
//                 <Props dhairya={obj} ></Props>
//             </ul>
//         </>
//     )
// }


import DisplayUserInfo from "./Props";
export default function App(){
    let studentProfile = {
    basic_info: {
        personal: {
            name: 'Nayan Pathak',
            age: 22,
            gender: 'Male'
        },
        education: {
            level: 'Bachelor',
            faculty: 'Computer Science',
            current_semester: 6,
            college: {
                name: 'ABC College',
                university: 'Tribhuvan University',
                location: {
                    city: 'Kathmandu',
                    district: 'Kathmandu',
                    province: 'Bagmati'
                }
            }
        }
    },

    address: {
        history: {
            stayed_places: [
                {
                    city: 'Kathmandu',
                    duration: {
                        from: 2019,
                        to: 2022
                    },
                    reason: 'Study'
                },
                {
                    city: 'Chitwan',
                    duration: {
                        from: 2016,
                        to: 2019
                    },
                    reason: 'Family'
                }
            ]
        },

        current: {
            temporary: {
                city: 'Birtamode',
                postal_code: 55704,
                district: 'Jhapa',
                province: 'Koshi',
                geo: {
                    lat: 26.5453,
                    lng: 88.0991
                }
            },
            permanent: {
                city: 'Birtamode',
                postal_code: 55704,
                district: 'Jhapa',
                province: 'Koshi'
            }
        }
    },

    preferences: {
        preferences: {
            dishes: {
                breakfast: [
                    { name: 'Bread', type: 'Light' },
                    { name: 'Chole', type: 'Heavy' }
                ],
                dinner: [
                    { name: 'Bhat', calories: 400 },
                    { name: 'Dal', calories: 150 },
                    { name: 'Sabji', calories: 120 }
                ]
            }
        },
        travel: {
            favorite_places: {
                countries: [
                    {
                        name: 'Switzerland',
                        cities: ['Zurich', 'Geneva']
                    },
                    {
                        name: 'Norway',
                        cities: ['Oslo']
                    }
                ],
                dream_city: {
                    name: 'Manang',
                    reasons: {
                        nature: true,
                        trekking: true,
                        snow: false
                    }
                }
            }
        }
    },

    activities: {
        hobbies: ['Coding', 'Reading', 'Traveling'],
        sports: {
            indoor: ['Chess', 'Table Tennis'],
            outdoor: [
                {
                    name: 'Football',
                    position: 'Midfielder',
                    experience_years: 5
                }
            ]
        }
    },

    system_meta: {
        created_at: '2026-01-01',
        last_updated: '2026-01-10',
        is_active: true
    }
};
return(
    <>
    <DisplayUserInfo dhairya={studentProfile}></DisplayUserInfo>
    </>
)
}
